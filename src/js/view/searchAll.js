import View from './View';

class SearchAll extends View {
  _parentElement = document.querySelector('.card-items');

  _generateMarkup() {
    // console.log(this._data);
    return this._data
      .map(result => {
        return ` <a class="card-item-link" href="#${result.id}" >
        <div class="card-item" data-id="${result.id}">       
        <img
          src=${result.image}
          alt="backpack"
          class="image-item"
        />
        <p class="title">${result.title.slice(0, 40)}...</p>
        <p class="description">
          ${result.description.slice(0, 80)}...
        </p>
        <div class="prices">
          <p class="price">${result.price}$</p>
          <p class="count">Sale ${result.rating.count} pieces</p>
        </div>
        </a>
      </div>


      `;
      })
      .join('');
  }
}

export default new SearchAll();
