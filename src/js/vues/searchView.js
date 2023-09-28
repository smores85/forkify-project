class Search {
  _parentEl = document.querySelector('.search');
  getQuery() {
    return this._parentEl.querySelector('.search__field').value;
  }
  clearInput() {
    return (this._parentEl.querySelector('.search__field').value = '');
  }
  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (event) {
      event.preventDefault();

      handler();
    });
  }
}
export default new Search();
