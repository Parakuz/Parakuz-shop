import View from './View';
import * as model from '../model';

class CartView extends View {
  _parentElement = document.querySelector('.cart');

  _generateMarkup() {
    return `
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="feature-icon cart-item"
              viewBox="0 0 512 512"
            >
              <circle
                cx="176"
                cy="416"
                r="16"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <circle
                cx="400"
                cy="416"
                r="16"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M48 80h64l48 272h256"
              />
              <path
                d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
              />
            </svg>

            <p class="numnub">${model.state.store.length}</p>
    `;
  }
}
export default new CartView();
