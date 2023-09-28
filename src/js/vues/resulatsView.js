import View from './view';
import icons from 'url:../../img/icons.svg';

class ResultView extends View {
  _parentElement = document.querySelector('.results');

  _generateHtml() {
    return this._data.map(data => this._generatePreview(data)).join('');
  }
  _generatePreview(data) {
    return `<li class="preview">
    <a class="preview__link " href="#${data.id}">
      <figure class="preview__fig">
        <img src="${data.image}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${data.title}</h4>
        <p class="preview__publisher">${data.publisher}</p>
        
      </div>
    </a>
  </li>`;
  }

  // _addHandlerRender(handler) {
  //   document.querySelector('.preview__link').addEventListener('click', handler);
  // }
}
export default new ResultView();
