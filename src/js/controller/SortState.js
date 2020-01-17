export class SortState {
  constructor(app) {
    this.newURL = new URL(window.location.toString());
    this.app = app;
  }

  // callback - Promise
  save(callback) {
    this.sortByChBtn = document.querySelector('.controlPanel input[type="radio"][name="sortBy"]:checked');
    this.orderByChBtn = document.querySelector('.controlPanel input[type="radio"][name="orderBy"]:checked');
    this.viewChBtn = document.querySelector('.controlPanel input[type="radio"][name="view"]:checked');

    this.newURL.searchParams.set(this.sortByChBtn.name, this.sortByChBtn.value);
    this.newURL.searchParams.set(this.orderByChBtn.name, this.orderByChBtn.value);
    this.newURL.searchParams.set(this.viewChBtn.name, this.viewChBtn.value);

    history.pushState(null, null, this.newURL.search);
    localStorage.setItem('oldURL', this.newURL);

    callback(this.app, this);
  }

  // callback - Promise
  change(callback) {
    const controlButtons = document.querySelectorAll('.controlPanel input[type="radio"]');

    controlButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        if (this.newURL.searchParams.get(button.name) === button.value) {
          return false;
        }

        this.save(callback);
      })
    });
  }

  installOld() {
    return new Promise((resolve, reject) => {
      window.addEventListener("load", (e) => {

        if (localStorage.getItem('oldURL')) {
          history.pushState(null, null, localStorage.getItem('oldURL'));
          const oldURL = new URL(window.location.toString());

          const activeSortBtn = document.querySelector(`input[name="sortBy"][value="${oldURL.searchParams.get('sortBy')}"]`);
          const activeOrderBtn = document.querySelector(`input[name="orderBy"][value="${oldURL.searchParams.get('orderBy')}"]`);
          const activeViewBtn = document.querySelector(`input[name="view"][value="${oldURL.searchParams.get('view')}"]`);
          activeSortBtn.setAttribute('checked', true);
          activeOrderBtn.setAttribute('checked', true);
          activeViewBtn.setAttribute('checked', true);
        }

        resolve();
      })
    });
  }
}