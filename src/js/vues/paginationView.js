import View from './view';
import icons from 'url:../../img/icons.svg';

class paginationView extends View {
  _parentElement = document.querySelector('.pagination');
  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      const goToPage = btn.dataset.goto;
      handler(Number(goToPage));
    });
  }
  _generateHtml() {
    let curPage = this._data.currentPage;
    const numPages = Math.ceil(
      this._data.result.length / this._data.resultPerPage
    );
    console.log(numPages, curPage, this._data);
    // page1, and there is other pages
    if (curPage === 1 && numPages > 1) {
      return `
      <button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
      <span>${curPage + 1}</span>
      <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
      </svg>
      </button>`;
    }
    // last page
    if (curPage === numPages && numPages > 1) {
      return `
      <button data-goto="${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>${curPage - 1}</span>
      </button>`;
    }
    // other page
    if (curPage < numPages) {
      return `
      <button data-goto="${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
      <span>${curPage + 1}</span>
      <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
      </svg>
      </button>
      <button data-goto="${
        curPage + -1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>${curPage - 1}</span>
      </button>`;
    }
    // page1, and there is no other pages
    return '';
  }
}
export default new paginationView();
