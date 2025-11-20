import React from 'react';
import { X, Calendar } from 'lucide-react';
import type { Recipe } from '../types';
import { useMealPlan } from '../context/MealPlanContext';

interface AddToPlannerModalProps {
  recipe: Recipe | null;
  onClose: () => void;
}

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const MEAL_TYPES = ['breakfast', 'lunch', 'dinner'] as const;

const AddToPlannerModal: React.FC<AddToPlannerModalProps> = ({ recipe, onClose }) => {
  const { addToMealPlan } = useMealPlan();
  const [selectedDay, setSelectedDay] = React.useState(DAYS[0]);
  const [selectedType, setSelectedType] = React.useState<typeof MEAL_TYPES[number]>('dinner');

  if (!recipe) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addToMealPlan(selectedDay, selectedType, recipe);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900">Add to Meal Plan</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-xl">
            {recipe.image && (
              <img src={recipe.image} alt={recipe.title} className="w-16 h-16 rounded-lg object-cover" />
            )}
            <div>
              <h4 className="font-bold text-indigo-900 line-clamp-1">{recipe.title}</h4>
              <p className="text-sm text-indigo-600/80">{recipe.prepTime + recipe.cookTime} mins</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Select Day</label>
              <div className="grid grid-cols-2 gap-2">
                {DAYS.map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedDay === day
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Meal Type</label>
              <div className="flex gap-2">
                {MEAL_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                      selectedType === type
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-bold transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            <span>Add to Planner</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddToPlannerModal;
