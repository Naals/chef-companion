import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChefHat, ShoppingCart, Save, Plus } from "lucide-react";

interface BottomNavigationProps {
  activeTab: "menu" | "cart" | "saved";
  onTabChange: (tab: "menu" | "cart" | "saved") => void;
  selectedCount: number;
  savedListsCount: number;
}

export function BottomNavigation({ 
  activeTab, 
  onTabChange, 
  selectedCount,
  savedListsCount 
}: BottomNavigationProps) {
  const tabs = [
    {
      id: "menu" as const,
      label: "Тағамдар",
      icon: ChefHat,
    },
    {
      id: "cart" as const,
      label: "Таңдалған",
      icon: ShoppingCart,
      count: selectedCount,
    },
    {
      id: "saved" as const,
      label: "Сақталған",
      icon: Save,
      count: savedListsCount,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border shadow-lg z-50 pb-safe">
      <div className="grid grid-cols-3 gap-1 p-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <Button
              key={tab.id}
              variant={isActive ? "default" : "ghost"}
              className={`
                relative flex flex-col items-center justify-center h-16 w-full
                ${isActive ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}
              `}
              onClick={() => onTabChange(tab.id)}
            >
              <Icon className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">{tab.label}</span>
              {tab.count && tab.count > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs flex items-center justify-center"
                >
                  {tab.count > 99 ? '99+' : tab.count}
                </Badge>
              )}
            </Button>
          );
        })}
      </div>
    </div>
  );
}