import * as model from './model';
import View from './view/View.js';
import searchCatelog from './view/searchCatelog';
import searchAll from './view/searchAll.js';
import paginationView from './view/paginationView.js';
import searchbyCategory from './view/searchbyCategory.js';
import itemsView from './view/itemsView.js';
import cartView from './view/cartView.js';
import cartlistView from './view/cartlistView.js';

///////////////////////////
const listmerchant = document.querySelector('.merchants-lists');
const itemElement = document.querySelector('.items-products');
const catelogtoggle = document.querySelector('.merchants-catalog');
const outline = document.querySelectorAll('.outline');
const cardToggle = document.querySelector('.real-cart');
const closetab = document.querySelector('.cross-tab');
/////////////////////////////

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

// Control hash id search by category
const controlloadSearchcategory = async function () {
  const id = window.location.hash.slice(1);
  if (id.length > 3) {
    await model.searchCategory(id);
    searchAll.render(model.getSearchResultsPageItems(1));
    searchbyCategory.checkActive();
    // Make it work
    catelogtoggle.classList.remove('none');
    itemElement.classList.add('none');
  }
};

// Control pagination when load by category
const controlSearchbycategory = async function (gotoPage) {
  try {
    searchAll.render(model.getSearchResultsPageItems(gotoPage));
    searchbyCategory.checkActive();
  } catch (err) {}
};

const controlloadItem = async function () {
  const id = window.location.hash.slice(1);
  if (id.length > 3) return;
  await model.searchCategory(id);
  itemsView.render(model.state.search.item);
};

const controlSelectItem = async function (id) {
  try {
    if (id.length < 3) {
      await model.searchCategory(id);
      // console.log(model.state.search.item);
      itemsView.render(model.state.search.item);
      // Set time out for button cart
      setTimeout(() => {
        controlAddstore();
      }, 3000);
      catelogtoggle.classList.add('none');
      itemElement.classList.remove('none');
    }
  } catch (err) {}
};

const controlAddstore = function () {
  const addcart = document.querySelector('.submit-cart');
  console.log(addcart);
  addcart.addEventListener('click', function (e) {
    if (e.target.closest('.submit-cart')) {
      model.addBookmark(model.state.search.item);
    }
    controlCart();
  });
};

const controlDeletestore = function () {
  const deleteitem = document.querySelectorAll('.delete-store');
  deleteitem.forEach(el =>
    el.addEventListener('click', function (e) {
      const clickdeleted = e.target.closest('.super-list');
      const deleteditem = Number(clickdeleted.dataset.ids);
      console.log(deleteditem);
      model.deleteBookmark(deleteditem);
      cartlistView.render(model.state.store);
      cartView.render(model.state.store);
      controlDeletestore();
    })
  );
};

const controlCart = function () {
  cartView.render(model.state.store);
  const mainCart = document.querySelector('.cart');
  mainCart.addEventListener('click', function (e) {
    const btnclicked = e.target.closest('.cart');
    if (btnclicked) {
      listmerchant.classList.add('blur');
      itemElement.classList.add('blur');
      catelogtoggle.classList.add('blur');
      cardToggle.classList.add('slider');
    }
  });
  controlListitemCart();
};

const controlListitemCart = function () {
  cartlistView.render(model.state.store);
  controlDeletestore();
};

const controlblur = function () {
  listmerchant.classList.remove('blur');
  itemElement.classList.remove('blur');
  catelogtoggle.classList.remove('blur');
  cardToggle.classList.remove('slider');
};

const controlOutline = function () {
  outline.forEach(rs => rs.addEventListener('click', controlblur));
  closetab.addEventListener('click', controlblur);
};

const controlInit = async function () {
  controlCatelog();
  controlItems();
  controlSearchbycategory();
  paginationView.addHandlerClick(controlItems);
  itemsView.addHandlerRender(controlloadItem);
  searchbyCategory.addHandlerRender(controlloadSearchcategory);
  searchbyCategory.addHandlerClick(controlSearchbycategory);
  itemsView.addHandlerClick(controlSelectItem);
  controlListitemCart();
  controlCart();
  controlOutline();
};
controlInit();
