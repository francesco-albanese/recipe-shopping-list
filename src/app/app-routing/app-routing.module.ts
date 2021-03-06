import { RecipeEditComponent } from './../recipes/recipe-edit/recipe-edit.component';
import { PleaseSelectRecipeComponent } from './../recipes/please-select-recipe/please-select-recipe.component';
import { RecipeDetailsComponent } from './../recipes/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './../shopping-list/shopping-list.component';
import { RecipesComponent } from './../recipes/recipes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: PleaseSelectRecipeComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailsComponent },
    { path: ':id/edit', component: RecipeEditComponent },
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', redirectTo: '/recipes' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
