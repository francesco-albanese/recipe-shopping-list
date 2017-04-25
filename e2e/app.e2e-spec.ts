import { RecipeShoppingListPage } from './app.po';

describe('recipe-shopping-list App', () => {
  let page: RecipeShoppingListPage;

  beforeEach(() => {
    page = new RecipeShoppingListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
