import { ShoppingListService } from 'app/shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from "app/recipes/recipe.model";
import { EventEmitter, Injectable } from "@angular/core";

@Injectable()

export class RecipeService {

  constructor(private shoppingListService: ShoppingListService) { }

  private recipes: Recipe[] = [
    new Recipe(`Falafel`, 
    `Super tasty falafel`, 
    `http://toriavey.com/images/2011/01/Herb-Falafel-Green-640x480.jpg`,
    [
      new Ingredient('chickpeas', 5),
      new Ingredient('onion', 1)
    ]),

    new Recipe(`Paneer Pakora`, 
    `Amazing paneer pakora indian recipe`, 
    `http://www.manjulaskitchen.com/blog/wp-content/uploads/paneer_pakoras.jpg`,
    [
      new Ingredient('cottage cheese', 1),
      new Ingredient('spinach', 10),
      new Ingredient('flour', 1)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
