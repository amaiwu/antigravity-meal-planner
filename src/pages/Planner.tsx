import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useMealPlan } from '../context/MealPlanContext';
import { useNavigate } from 'react-router-dom';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const MEAL_TYPES = ['breakfast', 'lunch', 'dinner'] as const;

const Planner: React.FC = () => {
  const { mealPlan, removeFromMealPlan } = useMealPlan();
  const navigate = useNavigate();

  const getMealsForDay = (day: string) => {
    return mealPlan.filter((slot) => slot.day === day);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Weekly Planner</h1>
        <p className="text-slate-500 mt-1">Plan your meals for the week</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-7 gap-4 overflow-x-auto pb-4">
        {DAYS.map((day) => (
          <div key={day} className="min-w-[200px] md:min-w-0 bg-white rounded-xl border border-slate-200 flex flex-col h-[600px]">
            <div className="p-3 border-b border-slate-100 bg-slate-50/50 rounded-t-xl">
              <h3 className="font-semibold text-slate-700 text-center">{day}</h3>
            </div>
            
            <div className="flex-1 p-2 space-y-2 overflow-y-auto">
              {MEAL_TYPES.map((type) => {
                const meals = getMealsForDay(day).filter(m => m.type === type);
                
                return (
                  <div key={type} className="space-y-1">
                    <div className="text-xs font-medium text-slate-400 uppercase tracking-wider px-1">{type}</div>
                    
                    {meals.map((slot) => (
                      <div key={slot.id} className="group relative bg-white border border-slate-100 rounded-lg p-2 shadow-sm hover:shadow-md transition-all">
                        <div className="pr-6">
                          <div className="text-sm font-medium text-slate-800 line-clamp-1">{slot.recipe.title}</div>
                          <div className="text-xs text-slate-500">{slot.recipe.prepTime + slot.recipe.cookTime}m</div>
                        </div>
                        <button 
                          onClick={() => removeFromMealPlan(slot.id)}
                          className="absolute top-2 right-2 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}

                    <button 
                      onClick={() => navigate('/recipes')}
                      className="w-full py-2 border border-dashed border-slate-200 rounded-lg text-slate-400 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-all flex items-center justify-center gap-1 text-xs"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Add</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planner;
