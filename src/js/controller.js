import * as model from './model.js';
// import icons from 'url:../img/icons.svg';
import recipeVue from './vues/recipieVues.js';
import searchView from './vues/searchView.js';
import resulatsView from './vues/resulatsView.js';
import paginationView from './vues/paginationView.js';
//

import icons from 'url:../img/icons.svg';
import 'core-js/stable'; // traja3 ay 7eja l es5;
import 'regenerator-runtime/runtime'; // traja3 async w await ll es5;
import View from './vues/view.js';
const recipeContainer = document.querySelector('.recipe');
// if (module.hot) {
//   module.hot.accept();
// }
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async function () {
  //loading recipe
  try {
    const id = window.location.hash.slice(1);
    if (!id) {
      return;
    }
    //render spinner
    recipeVue.loadSpinner();

    // render the recipe
    await model.loadRecipe(id); // lezem t7ot await 5ater async function will always return promise tel9aha <pending>
    // const { recipe } = await model.state;
    recipeVue.render(model.state.recipe);
  } catch (err) {
    recipeVue.errorMessage(err.message);
  }
};
const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;
    resulatsView.loadSpinner();
    await model.loadSearchResults(query);
    // resulatsView.render(model.state.search.result);

    // resulatsView.render(model.state.search.result);
    resulatsView.render(model.getSearchPage(1));
    // render page button initial
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};
const paginationController = function (goToPage) {
  //render new results
  resulatsView.render(model.getSearchPage(goToPage));
  // render new page button
  paginationView.render(model.state.search);
};
const controllerServings = function (numServings) {
  //updating servings counter
  model.updateServings(numServings);
  //updating the recipe view
  recipeVue.render(model.state.recipe);
  recipeVue.update(model.state.recipe);
};
// window.addEventListener('hashchange', showRecipe);
// ['hashchange', 'load'].map(ev => window.addEventListener(ev, showRecipe));

const init = function () {
  recipeVue.addHandlerRender(showRecipe);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(paginationController);
  recipeVue.addHandlerRenderServings(controllerServings);
  console.log('hi');
};
init();
