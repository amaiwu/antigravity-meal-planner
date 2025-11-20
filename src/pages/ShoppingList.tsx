import React, { useMemo } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { useMealPlan } from '../context/MealPlanContext';
import type { Ingredient } from '../types';

interface ShoppingItem extends Ingredient {
  checked: boolean;
}

const ShoppingList: React.FC = () => {
  const { mealPlan } = useMealPlan();

  const shoppingList = useMemo(() => {
    const items: Record<string, ShoppingItem> = {};

    mealPlan.forEach((slot) => {
      slot.recipe.ingredients.forEach((ing) => {
        const key = `${ing.name}-${ing.unit}`;
        if (items[key]) {
          items[key].amount += ing.amount;
        } else {
          items[key] = { ...ing, checked: false };
        }
      });
    });

    return Object.values(items);
  }, [mealPlan]);

  const [checkedItems, setCheckedItems] = React.useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  if (mealPlan.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50 text-indigo-200 mb-4">
          <ShoppingCart className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-semibold text-slate-900">Your shopping list is empty</h2>
        <p className="text-slate-500 mt-2">Add meals to your planner to generate a shopping list.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Shopping List</h1>
        <p className="text-slate-500 mt-1">Ingredients needed for your weekly meal plan</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="font-semibold text-slate-900">
            {shoppingList.length} Items
          </div>
          <div className="text-sm text-slate-500">
            {checkedItems.size} completed
          </div>
        </div>
        
        <div className="divide-y divide-slate-100">
          {shoppingList.map((item) => {
            const id = `${item.name}-${item.unit}`;
            const isChecked = checkedItems.has(id);
            
            return (
              <div 
                key={id}
                onClick={() => toggleItem(id)}
                className={`p-4 flex items-center gap-4 cursor-pointer transition-colors hover:bg-slate-50 ${isChecked ? 'bg-slate-50/50' : ''}`}
              >
                <div className={`
                  w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
                  ${isChecked ? 'bg-indigo-500 border-indigo-500 text-white' : 'border-slate-300 text-transparent'}
                `}>
                  <Check className="w-4 h-4" />
                </div>
                
                <div className="flex-1">
                  <div className={`font-medium text-slate-900 ${isChecked ? 'line-through text-slate-400' : ''}`}>
                    {item.name}
                  </div>
                </div>
                
                <div className={`font-medium ${isChecked ? 'text-slate-400' : 'text-indigo-600'}`}>
                  {item.amount} {item.unit}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
