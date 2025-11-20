export interface Ingredient {
    id: string;
    name: string;
    amount: number;
    unit: string;
}

export interface Recipe {
    id: string;
    title: string;
    description: string;
    image?: string;
    prepTime: number; // in minutes
    cookTime: number; // in minutes
    servings: number;
    ingredients: Ingredient[];
    instructions: string[];
    tags: string[];
}
