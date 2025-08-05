import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { X, Edit2, Check } from "lucide-react";
import { Dish } from "@/data/menu";
import { useState } from "react";

interface SelectedDish {
  dish: Dish;
  quantity: number;
  servings: number;
  id: string;
}

interface SelectedDishCardProps {
  selectedDish: SelectedDish;
  onRemove: (id: string) => void;
  onUpdate: (id: string, quantity: number, servings: number) => void;
}

export function SelectedDishCard({ selectedDish, onRemove, onUpdate }: SelectedDishCardProps) {
  const { dish, quantity, servings } = selectedDish;
  const [isEditing, setIsEditing] = useState(false);
  const [editQuantity, setEditQuantity] = useState(quantity);
  const [editServings, setEditServings] = useState(servings);
  
  const calculateTotal = (baseAmount: number) => {
    return (baseAmount * quantity).toFixed(1);
  };

  const handleSave = () => {
    if (editQuantity > 0 && editServings > 0) {
      onUpdate(selectedDish.id, editQuantity, editServings);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditQuantity(quantity);
    setEditServings(servings);
    setIsEditing(false);
  };

  return (
    <Card className="border-l-4 border-l-primary bg-gradient-subtle">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-semibold text-foreground">
              {dish.name}
            </CardTitle>
            {isEditing ? (
              <div className="space-y-3">
                <div className="space-y-2">
                  <span className="text-sm font-medium text-muted-foreground">Позиция:</span>
                  <div className="flex items-center gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-10 w-10 touch-manipulation"
                      onClick={() => setEditQuantity(Math.max(1, editQuantity - 1))}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    <Input
                      type="number"
                      min="1"
                      value={editQuantity}
                      onChange={(e) => setEditQuantity(parseInt(e.target.value) || 1)}
                      className="w-20 h-10 text-center text-base font-medium"
                    />
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-10 w-10 touch-manipulation"
                      onClick={() => setEditQuantity(editQuantity + 1)}
                    >
                      <Check className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                
                <div className="flex gap-2 pt-2">
                  <Button 
                    variant="default" 
                    className="flex-1 h-10 touch-manipulation" 
                    onClick={handleSave}
                  >
                    <Check className="h-4 w-4 mr-2" />
                    Сақтау
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 h-10 touch-manipulation" 
                    onClick={handleCancel}
                  >
                    <X className="h-4 w-4 mr-2" />
                    Болдырмау
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex gap-2 mt-1">
                <Badge variant="secondary" className="text-xs">
                  {quantity} позиция
                </Badge>
              </div>
            )}
          </div>
          <div className="flex gap-1">
            {!isEditing && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
                onClick={() => setIsEditing(true)}
              >
                <Edit2 className="h-4 w-4" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-destructive hover:bg-destructive/10"
              onClick={() => onRemove(selectedDish.id)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <h4 className="font-medium text-sm text-foreground mb-2">Ингредиенттер:</h4>
          <div className="space-y-1 text-sm">
            {dish.ingredients.map((ingredient, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-muted-foreground">{ingredient.name}</span>
                <span className="font-medium">
                  {typeof ingredient.amount === 'number' 
                    ? calculateTotal(ingredient.amount)
                    : ingredient.amount} {ingredient.unit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}