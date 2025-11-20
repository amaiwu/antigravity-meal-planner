import type { Recipe } from '../types';

export const mockRecipes: Recipe[] = [
    {
        id: '1',
        title: 'Lemon Herb Roasted Chicken',
        description: 'Juicy roasted chicken with fresh herbs and lemon zest. Perfect for a Sunday dinner.',
        prepTime: 20,
        cookTime: 45,
        servings: 4,
        ingredients: [
            { id: '1', name: 'Whole Chicken', amount: 1, unit: 'whole' },
            { id: '2', name: 'Lemon', amount: 2, unit: 'whole' },
            { id: '3', name: 'Rosemary', amount: 2, unit: 'sprigs' },
        ],
        instructions: ['Preheat oven to 400°F', 'Season chicken', 'Roast for 45 mins'],
        tags: ['Dinner', 'Healthy', 'Gluten-Free'],
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: '2',
        title: 'Creamy Mushroom Pasta',
        description: 'Rich and creamy pasta with wild mushrooms and parmesan cheese.',
        prepTime: 15,
        cookTime: 20,
        servings: 2,
        ingredients: [
            { id: '4', name: 'Fettuccine', amount: 200, unit: 'g' },
            { id: '5', name: 'Mushrooms', amount: 200, unit: 'g' },
            { id: '6', name: 'Heavy Cream', amount: 100, unit: 'ml' },
        ],
        instructions: ['Boil pasta', 'Sauté mushrooms', 'Add cream and simmer'],
        tags: ['Lunch', 'Vegetarian', 'Quick'],
        image: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: '3',
        title: 'Avocado Toast with Egg',
        description: 'Simple yet delicious breakfast with toasted sourdough, mashed avocado, and a poached egg.',
        prepTime: 10,
        cookTime: 5,
        servings: 1,
        ingredients: [
            { id: '7', name: 'Sourdough Bread', amount: 2, unit: 'slices' },
            { id: '8', name: 'Avocado', amount: 1, unit: 'whole' },
            { id: '9', name: 'Egg', amount: 1, unit: 'whole' },
        ],
        instructions: ['Toast bread', 'Mash avocado', 'Poach egg', 'Assemble'],
        tags: ['Breakfast', 'Healthy'],
        image: 'https://images.unsplash.com/photo-1525351484163-7529414395d8?auto=format&fit=crop&w=800&q=80'
    }
];
