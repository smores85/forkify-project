import icons from 'url:../../img/icons.svg';
export default class View {
  _data;
  render(data) {
    this._clear();

    if (data.length === 0) {
      this.errorMessage('no results found');
    }

    this._data = data;
    const markup = this._generateHtml();

    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  update(data) {
    if (data.length === 0) {
      this.errorMessage('no results found');
    }
    this._data = data;
    const newMarkup = this._generateHtml();
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElement = Array.from(newDOM.querySelectorAll('*'));
    const curElement = Array.from(this._parentElement.querySelectorAll('*'));
    newElement.forEach((newEl, i) => {
      if (
        !newEl.isEqualNode(curElement[i]) &&
        newEl.firstChild?.nodeValue != ''
      ) {
        curElement[i].textContent = newEl.textContent;
      }
      console.log(newEl.firstChild.nodeValue);
    });
  }
  _clear() {
    this._parentElement.innerHTML = '';
  }
  loadSpinner() {
    const markup = `
    <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
          </div>`;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  renderMessage() {
    const markup = `<div class="message">
    <div>
      <svg>
        <use href="${icons}#icon-smile"></use>
      </svg>
    </div>
    <p>Start by searching for a recipe or an ingredient. Have fun!</p>
  </div>`;
    this._clear;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  errorMessage(message) {
    const markup = `<div class="error">
    <div>
      <svg>
        <use href="${icons}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${message} Please try again!</p>
  </div>`;
    this._clear;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
