import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Nasi Goreng',
      imageUrl: 'https://www.seriouseats.com/2019/06/20190604-nasi-goreng-fried-rice-vicky-wasik-7.jpg',
      ingredients: ['Nasi', 'Bawang Putih', 'Kecap', 'Cabai']
    },
    {
      id: 'r2',
      title: 'Gado-gado',
      imageUrl: 'https://www.masakapahariini.com/wp-content/uploads/2019/01/gado-gado-MAHI.jpg',
      ingredients: ['Lontong', 'Tempe', 'Tahu', 'Timun']
    },
    {
      id: 'r3',
      title: 'Chicken Muffin with Egg',
      imageUrl: 'https://nos.jkt-1.neo.id/mcdonalds/foods/October2019/O1eyabztTE8thbUbu8Fw.png',
      ingredients: ['Roti', 'Daging Ayam', 'Keju', 'Telur']
    },
    {
      id: 'r4',
      title: 'Sausage McMuffin with Egg',
      imageUrl: 'https://nos.jkt-1.neo.id/mcdonalds/foods/October2019/pOXjdLMT1dffGjlcYHdj.png',
      ingredients: ['Roti', 'Daging Ayam', 'Keju', 'Telur', 'Sosis']
    },
    {
      id: 'r5',
      title: 'Double Cheeseburger',
      imageUrl: 'https://nos.jkt-1.neo.id/mcdonalds/foods/October2019/apZ1DxDmKvwS2lV12Elp.png',
      ingredients: ['Roti', 'Daging Sapi', 'Keju', 'Acar', 'Tomat']
    }

  ];
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
