import * as helper from './helper';
import * as config from './config';
export const state = {
  id: '',
  catelog: [],
  items: [],
  page: 1,
  search: {
    pages: 1,
    item: [],
  },
  store: [],
};

export const loadCategory = async function () {
  const data = await helper.getJSON(`${config.API_URL}/categories`);
  state.catelog = [...data];
};

export const loadItems = async function () {
  const data = await helper.getJSON(`${config.API_URL}`);
  state.items = [...data];
};

export const getSearchResultsPage = function (page = state.page) {
  state.page = page;
  const start = (page - 1) * config.RES_PER_PAGE;
  const end = page * config.RES_PER_PAGE;
  return state.items.slice(start, end);
};

export const searchCategory = async function (id) {
  if (id.length < 3) {
    const data = await helper.getJSON(`${config.API_URL}/${id}`);
    state.search.item = data;
  } else {
    const data = await helper.getJSON(`${config.API_URL}/category/${id}`);
    state.search.catelog = data;
    console.log(state.search.catelog);
  }
};

export const getSearchResultsPageItems = function (page = state.search.pages) {
  state.search.pages = page;
  const start = (page - 1) * config.RES_PER_PAGE;
  const end = page * config.RES_PER_PAGE;
  return state.search.catelog.slice(start, end);
};

const presistBookmarks = function () {
  console.log(JSON.stringify(state.store));
  localStorage.setItem('cart', JSON.stringify(state.store));
};

export const addBookmark = function (recipe) {
  if (state.store.some(el => el.id === recipe.id)) {
    alert('Have it in cart');
    return;
  }
  state.store.push(recipe);

  presistBookmarks();
};

export const deleteBookmark = function (id) {
  const index = state.store.findIndex(el => el.id === id);
  console.log(index);
  state.store.splice(index, 1);

  presistBookmarks();
};

const init = function () {
  const storage = localStorage.getItem('cart');
  if (storage) {
    state.store = JSON.parse(storage);
  }
  console.log(state.store);
};
init();
