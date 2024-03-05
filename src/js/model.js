import * as helper from './helper';
import * as config from './config';
export const state = {
  id: '',
  catelog: [],
  items: [],
  page: 1,
  search: {
    pages: 1,
  },
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
  console.log(page);
  const start = (page - 1) * config.RES_PER_PAGE;
  const end = page * config.RES_PER_PAGE;
  console.log(start, end);
  console.log(state.page);
  return state.items.slice(start, end);
};

export const searchCategory = async function (id) {
  state.id === id ? (state.id = id) : (state.search.pages = 1);
  const data = await helper.getJSON(`${config.API_URL}/category/${id}`);
  state.search.catelog = [...data];
  console.log(state.search.catelog);
};

export const getSearchResultsPageItems = function (page = state.search.pages) {
  state.search.pages = page;
  const start = (page - 1) * config.RES_PER_PAGE;
  const end = page * config.RES_PER_PAGE;
  console.log(start, end);
  console.log(state.search.pages);
  return state.search.catelog.slice(start, end);
};
