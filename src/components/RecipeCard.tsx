import React from 'react';
import { Clock, Users, ChefHat, Plus } from 'lucide-react';
import type { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onClick?: () => void;
  onAdd?: (e: React.MouseEvent) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick, onAdd }) => {
  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer border border-slate-100 relative"
    >
      <div className="relative h-48 overflow-hidden">
        {recipe.image ? (
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-indigo-50 flex items-center justify-center text-indigo-200">
            <ChefHat className="w-16 h-16" />
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium text-slate-600 shadow-sm">
          {recipe.tags[0]}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-1 group-hover:text-indigo-600 transition-colors">
          {recipe.title}
        </h3>
        <p className="text-slate-500 text-sm mb-4 line-clamp-2">
          {recipe.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-slate-400">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{recipe.prepTime + recipe.cookTime}m</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            <span>{recipe.servings}</span>
          </div>
        </div>
      </div>

      {onAdd && (
        <button
          onClick={onAdd}
          className="absolute bottom-4 right-4 p-2 bg-indigo-100 text-indigo-600 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-indigo-600 hover:text-white shadow-sm"
          title="Add to Meal Plan"
        >
          <Plus className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default RecipeCard;
