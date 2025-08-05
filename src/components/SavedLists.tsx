import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, Eye, Calendar, Share2 } from "lucide-react";
import { Dish } from "@/data/menu";

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

interface SavedListsProps {
  savedLists: SavedList[];
  onLoadList: (dishes: SelectedDish[]) => void;
  onDeleteList: (id: string) => void;
}

export function SavedLists({ savedLists, onLoadList, onDeleteList }: SavedListsProps) {
  if (savedLists.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6 text-center text-muted-foreground">
          <Calendar className="h-12 w-12 mx-auto mb-3 opacity-50" />
          <p>Әзірше сақталған тізім жоқ</p>
          <p className="text-xs mt-1">Тағамдар таңдап, сақтау батырмасын басыңыз</p>
        </CardContent>
      </Card>
    );
  }

  const getTotalDishes = (dishes: SelectedDish[]) => {
    return dishes.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalServings = (dishes: SelectedDish[]) => {
    return dishes.reduce((total, item) => total + item.servings, 0);
  };

  const handleShare = (list: SavedList) => {
    const dishList = list.dishes.map(item => 
      `• ${item.dish.name} - ${item.quantity} дана, ${item.servings} адам`
    ).join('\n');
    
    const shareText = `🍽️ SatuFood - ${list.name}\n\n${dishList}\n\n📅 ${new Date(list.createdAt).toLocaleDateString('kk-KZ')}`;
    
    if (navigator.share) {
      navigator.share({
        title: `SatuFood - ${list.name}`,
        text: shareText,
      });
    } else {
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Тізім буферге көшірілді!');
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Сақталған тізімдер ({savedLists.length})</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 max-h-80 sm:max-h-96 overflow-y-auto">
          {savedLists.map((list) => (
            <div key={list.id} className="border border-border rounded-lg p-3 bg-card/50">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{list.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {new Date(list.createdAt).toLocaleDateString('kk-KZ', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => handleShare(list)}
                  >
                    <Share2 className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7"
                    onClick={() => onLoadList(list.dishes)}
                  >
                    <Eye className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-destructive hover:bg-destructive/10"
                    onClick={() => onDeleteList(list.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              
              <div className="flex gap-2 mb-2">
                <Badge variant="secondary" className="text-xs">
                  {list.dishes.length} түрлі тағам
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {getTotalDishes(list.dishes)} дана
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {getTotalServings(list.dishes)} адам
                </Badge>
              </div>
              
              <div className="text-xs text-muted-foreground">
                <div className="line-clamp-2">
                  {list.dishes.map(item => item.dish.name).join(', ')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}