import {useEffect, useState} from "react";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Search, ChefHat, UtensilsCrossed} from "lucide-react";
import {Dish} from "@/data/menu";
import {DishCard} from "@/components/DishCard";
import {SelectedDishCard} from "@/components/SelectedDishCard";
import {ShoppingList} from "@/components/ShoppingList";
import {SavedLists} from "@/components/SavedLists";
import {BottomNavigation} from "@/components/BottomNavigation";
import {useLocalStorage} from "@/hooks/useLocalStorage";
import {useToast} from "@/hooks/use-toast";
import {DishCreateDialog} from "@/components/DishCreateDialog.tsx";
import {Button} from "@/components/ui/button";

interface SelectedDish {
    dish: Dish;
    quantity: number;
    servings: number;
    id: string;
}

interface SavedList {
    id: string;
    name: string;
    dishes: SelectedDish[];
    createdAt: string;
}

const Index = () => {
    const [menu, setMenu] = useState<Dish[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDishes, setSelectedDishes] = useState<SelectedDish[]>([]);
    const [savedLists, setSavedLists] = useLocalStorage<SavedList[]>('satufood-saved-lists', []);
    const [customDishes, setCustomDishes] = useLocalStorage<Dish[]>('satufood-custom-dishes', []);
    const [activeTab, setActiveTab] = useState<"menu" | "cart" | "saved">("menu");
    const [needsRefresh, setNeedsRefresh] = useState(false);
    const [createOpen, setCreateOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const {toast} = useToast();

    const fetchMenu = async () => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:8080/api/dish/");
            const data = await res.json();
            setMenu(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMenu();
    }, []);

    useEffect(() => {
        if (needsRefresh) {
            setSearchTerm('');
            fetchMenu().then(() => setNeedsRefresh(false));
        }
    }, [needsRefresh]);

    const allDishes = [...menu, ...customDishes];

    const filteredDishes = allDishes.filter((dish) => {
        const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch;
    });

    const handleAddDish = (dish: Dish, quantity: number) => {
        setSelectedDishes(prev => {
            const existing = prev.find(item => item.dish.id === dish.id);
            if (existing) {
                return prev.map(item =>
                    item.dish.id === dish.id ? {...item, quantity} : item
                );
            } else {
                const id = `${dish.id}-${Date.now()}`;
                const newSelectedDish: SelectedDish = {
                    dish,
                    quantity,
                    servings: 1,
                    id,
                };
                return [...prev, newSelectedDish];
            }
        });
    };

    const handleRemoveDish = (id: string) => {
        setSelectedDishes(prev => prev.filter(item => item.id !== id));
    };

    const handleUpdateDish = (id: string, quantity: number, servings: number) => {
        setSelectedDishes(prev => prev.map(item =>
            item.id === id ? {...item, quantity, servings} : item
        ));
        toast({
            title: "Тағам жаңартылды",
            description: "Порция мөлшері сәтті өзгертілді",
        });
    };

    const handleSaveList = (name: string, dishes: SelectedDish[]) => {
        const newList: SavedList = {
            id: Date.now().toString(),
            name,
            dishes: [...dishes],
            createdAt: new Date().toISOString(),
        };
        setSavedLists(prev => [newList, ...prev]);
        toast({
            title: "Тізім сақталды",
            description: `"${name}" тізімі сәтті сақталды`,
        });
    };

    const handleLoadList = (dishes: SelectedDish[]) => {
        const newDishes = dishes.map(dish => ({
            ...dish,
            id: `${dish.dish.id}-${Date.now()}-${Math.random()}`
        }));
        setSelectedDishes(newDishes);
        toast({
            title: "Тізім жүктелді",
            description: "Сақталған тізім сәтті жүктелді",
        });
    };

    const handleDeleteList = (id: string) => {
        setSavedLists(prev => prev.filter(list => list.id !== id));
        toast({
            title: "Тізім жойылды",
            description: "Сақталған тізім жойылды",
        });
    };

    const isDishSelected = (dishId: string) => {
        return selectedDishes.some(item => item.dish.id === dishId);
    };

    if (loading) {
        return <div className="text-center py-10 text-muted-foreground">Жүктелуде...</div>;
    }


    const renderContent = () => {
        switch (activeTab) {
            case "menu":
                return (
                    <div className="space-y-4 sm:space-y-6">
                        {/* Search and Filters */}
                        <Card>
                            <CardHeader className="flex-row items-center justify-between">
                                <CardTitle>Тағамдарды таңдау</CardTitle>
                                <div>
                                    <Button onClick={() => setCreateOpen(true)}>+ Тағам қосу</Button>
                                    <DishCreateDialog
                                        open={createOpen}
                                        onOpenChange={setCreateOpen}
                                        onCreated={() => {
                                            setNeedsRefresh(true);
                                        }}
                                    />

                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="search">Іздеу</Label>
                                    <div className="relative">
                                        <Search
                                            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"/>
                                        <Input
                                            id="search"
                                            placeholder="Тағам атауын енгізіңіз..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="pl-10 text-base h-12"
                                        />
                                    </div>
                                </div>

                            </CardContent>
                        </Card>

                        {/* Menu Grid */}
                        <div className="grid grid-cols-1 gap-4">
                            {filteredDishes.map((dish) => (
                                <DishCard
                                    key={dish.id}
                                    dish={dish}
                                    onAdd={handleAddDish}
                                    isSelected={isDishSelected(dish.id)}
                                    initialQuantity={
                                        selectedDishes.find(item => item.dish.id === dish.id)?.quantity
                                    }
                                    onRefresh={() => setNeedsRefresh(true)}
                                />
                            ))}
                        </div>

                        {filteredDishes.length === 0 && (
                            <Card>
                                <CardContent className="pt-6 text-center text-muted-foreground">
                                    Іздеу шартына сәйкес тағам табылмады
                                </CardContent>
                            </Card>
                        )}
                    </div>
                );

            case "cart":
                return (
                    <div className="space-y-4 sm:space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    Таңдалған тағамдар ({selectedDishes.length})
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {selectedDishes.length === 0 ? (
                                    <div className="text-center text-muted-foreground py-8">
                                        Әзірше ешқандай тағам таңдалмаған
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {selectedDishes.map((selectedDish) => (
                                            <SelectedDishCard
                                                key={selectedDish.id}
                                                selectedDish={selectedDish}
                                                onRemove={handleRemoveDish}
                                                onUpdate={handleUpdateDish}
                                            />
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {selectedDishes.length > 0 && (
                            <ShoppingList selectedDishes={selectedDishes} onSaveList={handleSaveList}/>
                        )}
                    </div>
                );

            case "saved":
                return (
                    <SavedLists
                        savedLists={savedLists}
                        onLoadList={handleLoadList}
                        onDeleteList={handleDeleteList}
                    />
                );


            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-subtle pb-20">
            {/* Header */}
            <header className="bg-gradient-primary shadow-soft sticky top-0 z-40">
                <div className="container mx-auto px-3 py-4 pt-16 sm:px-4 sm:py-6 sm:pt-20">
                    <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                        <ChefHat className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground"/>
                        <h1 className="text-xl sm:text-3xl font-bold text-primary-foreground">SatuFood</h1>
                        <UtensilsCrossed className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground"/>
                    </div>
                    <p className="text-center text-primary-foreground/90 mt-1 sm:mt-2 text-xs sm:text-base">
                        Повар үшін арнайы қосымша - тағамдар мен ингредиенттерді басқару
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <div className="container mx-auto px-3 py-4 sm:px-4 sm:py-8">
                {renderContent()}
            </div>

            {/* Bottom Navigation */}
            <BottomNavigation
                activeTab={activeTab}
                onTabChange={setActiveTab}
                selectedCount={selectedDishes.length}
            />
        </div>
    );
};

export default Index;
