import View from './View';
import * as model from '../model';

class SearchbyCategory extends View {
  _parentElement = document.querySelector('.pagnations');
  _btnPrev = document.querySelector('.prev');
  _btnNext = document.querySelector('.next');

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.pagnation');
      console.log(btn);

      const gotoPage = +btn.value;
      handler(gotoPage);
    });
    this._btnPrev.addEventListener('click', function (e) {
      const btn = e.target.closest('.prev');

      if (model.state.search.pages === 1) return;
      const gotoPagePrev = --model.state.search.pages;
      console.log(model.state.search.pages);
      handler(gotoPagePrev);
    });
    this._btnNext.addEventListener('click', function (e) {
      const btn = e.target.closest('.next');

      const gotoPageNext = ++model.state.search.pages;
      console.log(model.state.search.pages);
      handler(gotoPageNext);
    });
  }

  checkActive() {
    const activeCheck = document.querySelectorAll('.pagnation');
    activeCheck.forEach(rs => {
      rs.value === model.state.search.pages
        ? rs.classList.add('active-pag')
        : rs.classList.remove('active-pag');
    });
  }
}
export default new SearchbyCategory();
