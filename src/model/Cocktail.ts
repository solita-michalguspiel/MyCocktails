export interface MyCocktail {
  id: string;
  name: string;
  category: string;
  type: string;
  glass: string;
  instructions: string;
  imageUrl: string;
  ingredients: Ingredient[];
}

export interface Ingredient {
  name: string;
  measure: string;
}