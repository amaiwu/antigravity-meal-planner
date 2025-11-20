import React, { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';
import { mockRecipes } from '../data/mockRecipes';
import AddToPlannerModal from '../components/AddToPlannerModal';
import type { Recipe } from '../types';

const Recipes: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddClick = (e: React.MouseEvent, recipe: Recipe) => {
    e.stopPropagation();
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Recipes</h1>
          <p className="text-slate-500 mt-1">Manage your recipe collection</p>
        </div>
        
        <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-xl font-medium transition-colors shadow-sm shadow-indigo-200">
          <Plus className="w-5 h-5" />
          <span>New Recipe</span>
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input 
          type="text" 
          placeholder="Search recipes..." 
          className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockRecipes.map((recipe) => (
          <RecipeCard 
            key={recipe.id} 
            recipe={recipe} 
            onAdd={(e) => handleAddClick(e, recipe)}
          />
        ))}
      </div>

      {isModalOpen && (
        <AddToPlannerModal 
          recipe={selectedRecipe} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
};

export default Recipes;
