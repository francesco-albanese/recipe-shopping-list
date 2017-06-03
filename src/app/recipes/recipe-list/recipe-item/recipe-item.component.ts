import { RecipeService } from './../../recipe.service';
import { 
  Component, 
  OnInit, 
  Input, 
  EventEmitter, 
  Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { Route, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
