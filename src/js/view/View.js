export default class View {
  _data;

  render(data) {
    this._data = data;
    // console.log(this._data);
    const markup = this._generateMarkup();
    // console.log(markup);
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }
}
