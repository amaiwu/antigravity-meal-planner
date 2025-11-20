import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { Recipe } from '../types';

export interface MealSlot {
  id: string;
  day: string; // 'Monday', 'Tuesday', etc.
  type: 'breakfast' | 'lunch' | 'dinner';
  recipe: Recipe;
}

interface MealPlanContextType {
  mealPlan: MealSlot[];
  addToMealPlan: (day: string, type: 'breakfast' | 'lunch' | 'dinner', recipe: Recipe) => void;
  removeFromMealPlan: (id: string) => void;
}

const MealPlanContext = createContext<MealPlanContextType | undefined>(undefined);

export const MealPlanProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mealPlan, setMealPlan] = useState<MealSlot[]>([]);

  const addToMealPlan = (day: string, type: 'breakfast' | 'lunch' | 'dinner', recipe: Recipe) => {
    const newSlot: MealSlot = {
      id: Math.random().toString(36).substr(2, 9),
      day,
      type,
      recipe,
    };
    setMealPlan((prev) => [...prev, newSlot]);
  };

  const removeFromMealPlan = (id: string) => {
    setMealPlan((prev) => prev.filter((slot) => slot.id !== id));
  };

  return (
    <MealPlanContext.Provider value={{ mealPlan, addToMealPlan, removeFromMealPlan }}>
      {children}
    </MealPlanContext.Provider>
  );
};

export const useMealPlan = () => {
  const context = useContext(MealPlanContext);
  if (context === undefined) {
    throw new Error('useMealPlan must be used within a MealPlanProvider');
  }
  return context;
};
