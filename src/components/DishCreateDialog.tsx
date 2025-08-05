import { useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { X } from "lucide-react";

interface Ingredient {
    name: string;
    amount: number;
    unit: string;
}

interface DishCreateDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onCreated?: () => void; // Callback to refresh list
}

export function DishCreateDialog({ open, onOpenChange, onCreated }: DishCreateDialogProps) {
    const { toast } = useToast();
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [ingredients, setIngredients] = useState<Ingredient[]>([
        { name: "", amount: 0, unit: "" },
    ]);

    const handleIngredientChange = (index: number, key: string, value: string | number) => {
        const updated = [...ingredients];
        updated[index] = { ...updated[index], [key]: value };
        setIngredients(updated);
    };

    const addIngredient = () => {
        setIngredients([...ingredients, { name: "", amount: 0, unit: "" }]);
    };

    const removeIngredient = (index: number) => {
        const updated = [...ingredients];
        updated.splice(index, 1);
        setIngredients(updated);
    };

    const handleSubmit = async () => {
        if (!name || ingredients.some((i) => !i.name || !i.unit)) {
            toast({ title: "Қате!", description: "Барлық өрістерді толтырыңыз", variant: "destructive" });
            return;
        }

        try {
            const res = await fetch("http://localhost:8080/api/dish", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, category, ingredients }),
            });

            if (res.ok) {
                toast({ title: "Тағам қосылды ✅" });
                onCreated?.();
                setName("");
                setCategory("");
                setIngredients([{ name: "", amount: 0, unit: "" }]);
                onOpenChange(false);
            } else {
                const data = await res.json();
                throw new Error(data.message || "Қате орын алды");
            }
        } catch (e: any) {
            toast({ title: "Қате!", description: e.message, variant: "destructive" });
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Жаңа тағам қосу</DialogTitle>
                </DialogHeader>

                <Label>Атауы</Label>
                <Input value={name} onChange={(e) => setName(e.target.value)} />

                <Label className="mt-2">Категория (міндетті емес)</Label>
                <Input value={category} onChange={(e) => setCategory(e.target.value)} />

                <div className="mt-4 space-y-2">
                    <div className="flex justify-between items-center">
                        <h4 className="font-medium">Ингредиенттер</h4>
                        <Button size="sm" onClick={addIngredient}>+ Қосу</Button>
                    </div>

                    {ingredients.map((ing, index) => (
                        <div key={index} className="flex gap-2 items-center">
                            <Input
                                placeholder="Атауы"
                                value={ing.name}
                                onChange={(e) => handleIngredientChange(index, "name", e.target.value)}
                            />
                            <Input
                                placeholder="Салмақ"
                                type="number"
                                value={ing.amount}
                                onChange={(e) => handleIngredientChange(index, "amount", parseFloat(e.target.value))}
                                className="w-[100px]"
                            />
                            <Input
                                placeholder="Бірлік"
                                value={ing.unit}
                                onChange={(e) => handleIngredientChange(index, "unit", e.target.value)}
                                className="w-[70px]"
                            />
                            <Button variant="ghost" size="icon" onClick={() => removeIngredient(index)}>
                                <X className="h-4 w-4 text-muted-foreground" />
                            </Button>
                        </div>
                    ))}
                </div>

                <DialogFooter className="pt-4">
                    <Button onClick={handleSubmit}>Сақтау</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
