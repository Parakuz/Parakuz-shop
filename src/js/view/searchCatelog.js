import View from './View';

class SearchCatalog extends View {
  _parentElement = document.querySelector('.super-list-item');

  _generateMarkup() {
    console.log(this._data);
    return this._data
      .map(result => {
        return `<li class="merchant-list-item"><a href="#${result.trim()}" class="item">${
          result.slice(0, 1).toUpperCase() + result.slice(1)
        }</a></li>
      `;
      })
      .join('');
  }
}

export default new SearchCatalog();
