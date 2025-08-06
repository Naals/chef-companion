import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Plus, Minus, Pencil, Trash2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Dish } from "@/data/menu";

interface DishCardProps {
  dish: Dish;
  onAdd: (dish: Dish, quantity: number) => void;
  isSelected: boolean;
  initialQuantity?: number;
  onRefresh?: () => void;
}

export function DishCard({ dish, onAdd, isSelected, initialQuantity, onRefresh }: DishCardProps) {
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(initialQuantity || 1);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [editedDishName, setEditedDishName] = useState(dish.name);
  const [editedIngredients, setEditedIngredients] = useState([...dish.ingredients]);

  useEffect(() => {
    setQuantity(initialQuantity || 1);
  }, [initialQuantity]);

  const handleQuantityChange = (delta: number) => {
    const newQuantity = Math.max(1, quantity + delta);
    setQuantity(newQuantity);
    if (isSelected) onAdd(dish, newQuantity);
  };

  const handleAddDish = () => {
    onAdd(dish, quantity);
  };

  const handleIngredientChange = (index: number, key: string, value: string | number) => {
    const updated = [...editedIngredients];
    updated[index] = { ...updated[index], [key]: value };
    setEditedIngredients(updated);
  };

  const handleAddIngredient = () => {
    setEditedIngredients([...editedIngredients, { name: "", amount: 0, unit: "" }]);
  };

  const handleRemoveIngredient = (index: number) => {
    const updated = [...editedIngredients];
    updated.splice(index, 1);
    setEditedIngredients(updated);
  };

  const handleEditSave = async () => {
    try {
      //@ts-ignore
      const res = await fetch(`http://localhost:8080/api/dish/${dish._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...dish,
          name: editedDishName,
          ingredients: editedIngredients,
        }),
      });

      if (res.ok) {
        toast({ title: "Жаңартылды", description: "Атауы мен ингредиенттер өзгертілді ✅" });
        setIsEditOpen(false);
        onRefresh?.();
      } else {
          throw new Error("Update failed");
      }
    } catch (e) {
      console.error(e);
      toast({ title: "Қате!", description: "Жаңарту мүмкін болмады", variant: "destructive" });
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      //@ts-ignore
      const res = await fetch(`http://localhost:8080/api/dish/${dish._id}`, { method: "DELETE" });
      if (res.ok) {
        toast({ title: "Өшірілді", description: "Диш сәтті өшірілді ✅" });
        setIsDeleteOpen(false);
        onRefresh();
      } else {
        throw new Error("Delete failed");
      }
    } catch (e) {
      console.error(e);
      toast({ title: "Қате!", description: "Өшіру мүмкін болмады", variant: "destructive" });
    }
  };

  return (
      <>
        <Card className={`transition-all duration-300 hover:shadow-soft ${isSelected ? "ring-2 ring-primary shadow-glow" : ""}`}>
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg font-semibold text-foreground">{dish.name}</CardTitle>
              <div className="flex gap-2">
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9"
                    onClick={() => {
                      setEditedDishName(dish.name);
                      setEditedIngredients([...dish.ingredients]);
                      setIsEditOpen(true);
                    }}
                    style={{
                      background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-glow)))",
                      color: "white",
                    }}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9"
                    onClick={() => setIsDeleteOpen(true)}
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <Label htmlFor={`quantity-${dish.id}`} className="text-sm font-medium text-center">Позиция</Label>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon" className="h-10 w-10" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="font-semibold min-w-[3rem] text-center text-lg">{quantity}</span>
                <Button variant="outline" size="icon" className="h-10 w-10" onClick={() => handleQuantityChange(1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button onClick={handleAddDish} className="w-full" variant={isSelected ? "accent" : "default"}>
              {isSelected ? "Жаңарту" : "Таңдау"}
            </Button>
          </CardContent>
        </Card>

        {/* Edit Modal */}
        <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
          <DialogContent className="max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Тағамды өңдеу</DialogTitle>
            </DialogHeader>

            <Label className="text-sm">Атауы</Label>
            <Input value={editedDishName} onChange={(e) => setEditedDishName(e.target.value)} />

            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">Ингредиенттер</h4>
                <Button size="sm" onClick={handleAddIngredient}>+ Қосу</Button>
              </div>

              {editedIngredients.map((ing, index) => (
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
                    <Button variant="ghost" size="icon" onClick={() => handleRemoveIngredient(index)}>
                      <X className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>
              ))}
            </div>

            <DialogFooter className="pt-4">
              <Button onClick={handleEditSave}>Сақтау</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Delete Modal */}
        <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Бұл тағамды өшіру керек пе?</DialogTitle>
            </DialogHeader>
            <DialogFooter>
              <Button variant="destructive" onClick={handleDeleteConfirm}>Иә, өшіру</Button>
              <Button variant="outline" onClick={() => setIsDeleteOpen(false)}>Жоқ</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
  );
}
