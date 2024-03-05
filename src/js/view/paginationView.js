import View from './View';
import * as model from '../model';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagnations');
  _btnPrev = document.querySelector('.prev');
  _btnNext = document.querySelector('.next');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.pagnation');
      console.log(btn);

      const gotoPage = +btn.value;
      handler(gotoPage);
    });
    this._btnPrev.addEventListener('click', function (e) {
      const btn = e.target.closest('.prev');

      if (model.state.page === 1) return;
      const gotoPagePrev = --model.state.page;
      console.log(model.state.page);
      handler(gotoPagePrev);
    });
    this._btnNext.addEventListener('click', function (e) {
      const btn = e.target.closest('.next');

      const gotoPageNext = ++model.state.page;
      console.log(model.state.page);
      handler(gotoPageNext);
    });
  }

  checkActive() {
    const activeCheck = document.querySelectorAll('.pagnation');
    activeCheck.forEach(rs => {
      rs.value === model.state.page
        ? rs.classList.add('active-pag')
        : rs.classList.remove('active-pag');
    });
  }
}
export default new PaginationView();
