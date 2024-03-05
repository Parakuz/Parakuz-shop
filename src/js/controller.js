import * as model from './model';
import View from './view/View.js';
import searchCatelog from './view/searchCatelog';
import searchAll from './view/searchAll.js';
import paginationView from './view/paginationView.js';
import searchbyCategory from './view/searchbyCategory.js';

// Render Catalog
const controlCatelog = async function () {
  try {
    await model.loadCategory();
    console.log(model.state);
    searchCatelog.render(model.state.catelog);
  } catch (err) {}
};
// Render All items
const controlItems = async function (gotoPage) {
  try {
    const id = window.location.hash.slice(1);
    if (id) return;
    await model.loadItems();
    console.log(model.state.items);
    searchAll.render(model.getSearchResultsPage(gotoPage));
    paginationView.checkActive();
  } catch (err) {}
};

const controlloadSearchcategory = async function () {
  const id = window.location.hash.slice(1);
  if (!id) return;
  console.log(id);
  await model.searchCategory(id);
  searchAll.render(model.getSearchResultsPageItems(1));
  searchbyCategory.checkActive();
  console.log(model.state.search);
};

const controlSearchbycategory = async function (gotoPage) {
  try {
    searchAll.render(model.getSearchResultsPageItems(gotoPage));
    searchbyCategory.checkActive();
  } catch (err) {}
};

const controlInit = async function () {
  controlCatelog();
  controlItems();
  paginationView.addHandlerClick(controlItems);
  searchbyCategory.addHandlerRender(controlloadSearchcategory);
  controlSearchbycategory();
  searchbyCategory.addHandlerClick(controlSearchbycategory);
};
controlInit();
