import View from './View';
import * as model from '../model';

class CartlistView extends View {
  _parentElement = document.querySelector('.cart-list');

  _generateMarkup() {
    console.log(this._data);
    return this._data
      .map((result, i) => {
        return `
      <div data-ids=${result.id} class="super-list flex">
      <div class="item-cart-list flex">
        <img
          class="image-item-list"
          src=${result.image}
          alt="backpack"
        />
      </div>
      <span class="pricess">${result.price}$</span>
      <svg
        data-id="2"
        xmlns="http://www.w3.org/2000/svg"
        class="delete-store red-icon"
        viewBox="0 0 512 512"
      >
        <path
          d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
        />
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="32"
          d="M80 112h352"
        />
        <path
          d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
        />
      </svg>
    </div>
  
      `;
      })
      .join('');
  }
}
export default new CartlistView();
