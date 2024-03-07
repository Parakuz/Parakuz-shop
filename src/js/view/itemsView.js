import View from './View';

class ItemsView extends View {
  _parentElement = document.querySelector('.items-products');
  _cardElement = document.querySelector('.card-items');

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  addHandlerClick(handler) {
    this._cardElement.addEventListener('click', function (e) {
      // console.log('hi');
      const btncliked = e.target.closest('.card-item');
      console.log(btncliked);
      const btn = btncliked.dataset.id;
      console.log(btn);
      handler(btn);
    });
  }

  _generateMarkup() {
    console.log(this._data);
    return `
    <div class="image-product flex">
    <img
      src=${this._data.image}
      alt="backpack"
      class="product-image"
    />
    <div class="products">
      <h3 class="third-heading">${this._data.title}</h3>
      <p class="product-detail add-md-bot-margin">
        ${this._data.description}
      </p>
      <div class="rating add-md-bot-margin">
        <!-- class="feature-icon star" -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="feature-icon star"
          viewBox="0 0 512 512"
        >
          <path
            d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="feature-icon star"
          viewBox="0 0 512 512"
        >
          <path
            d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="feature-icon star"
          viewBox="0 0 512 512"
        >
          <path
            d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="feature-icon star"
          viewBox="0 0 512 512"
        >
          <path
            d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="feature-icon star"
          viewBox="0 0 512 512"
        >
          <path
            d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="32"
          />
        </svg>
      </div>
      <div class="price add-md-bot-margin">
        <span class="pricesss">${this._data.price}$</span>
      </div>
      <div class="ratio-cart">
        <div class="product-ratio">
          <span class="minus">-</span>
          <span class="num">01</span>
          <span class="plus">+</span>
        </div>
        <a data-id=${this._data.id} class="submit-cart">Add to Cart</a>
      </div>
    </div>
  </div>
</div>`;
  }
}

export default new ItemsView();
