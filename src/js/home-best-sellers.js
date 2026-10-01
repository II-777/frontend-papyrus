import { getTopBooks } from './utils/get-top-books';
import { refs } from './refs-elements';
let startCategory = 0;
let endCategory;
let options = {
  root: null,
  rootMargin: '100px',
  threshold: 1.0,
};
export let observer = new IntersectionObserver(scrollByCategoriesDown, options);
export let bestsellers = [];
refs.categoriesContainer.addEventListener('click', onAllCategoriesClick);
function onAllCategoriesClick(evt) {
  if (!evt.target.classList.contains('js-all-categories')) {
    return;
  }
  refs.homeCategoryBooksList.innerHTML = '';
  refs.homeMainTitle.textContent = 'Best sellers';
  refs.homeMainTitleAccent.textContent = 'Books';
  bestSellersToRender();
}
function booksFromCategories(categories) {
  return categories.flatMap(({ books }) => books);
}
function bestSellersToRender() {
  startCategory = 0;
  getTopBooks()
    .then(data => {
      if (!Array.isArray(data) || !data.length) {
        return;
      }
      bestsellers = data;
      endCategory = bestsellers.length;
      refs.homeCategoryBooksList.insertAdjacentHTML(
        'beforeend',
        `<li class="home-books-category-item"><ul class="home-books-list">${createBooksList(
          booksFromCategories(bestsellers.slice(0, 4))
        )}</ul></li>`
      );
      observer.observe(refs.homeObserverTarget);
    })
    .catch(err => console.log(err));
}
bestSellersToRender();
function createBooksList(books) {
  const bookTitleLength = 40;

  return books
    .map(({ _id, author, book_image, title }) => {
      const safeTitle = title || '';
      const shortTitle =
        safeTitle.length > bookTitleLength
          ? safeTitle.slice(0, bookTitleLength - 3) + '...'
          : safeTitle;
      return `  <li class="home-books-item js-home-books-item" data-id=${_id}>
                <img class="home-books-book-picture" src="${book_image}" alt="${shortTitle}" />
                <p class="home-books-book-title">${shortTitle}</p>
                <p class="home-books-book-author">${author || ''}</p>
              </li>`;
    })
    .join('');
}

function scrollByCategoriesDown() {
  startCategory += 4;
  if (startCategory >= bestsellers.length) {
    observer.unobserve(refs.homeObserverTarget);
    return;
  }
  const list = refs.homeCategoryBooksList.querySelector('.home-books-list');
  list?.insertAdjacentHTML(
    'beforeend',
    createBooksList(
      booksFromCategories(bestsellers.slice(startCategory, startCategory + 4))
    )
  );
}
refs.homeMainScrollUp.addEventListener('click', scrollByCategoriesUp);
function scrollByCategoriesUp() {
  const { height: cardHeight } =
    refs.homeCategoryBooksList.getBoundingClientRect();
  window.scrollBy({
    top: -cardHeight,
    behavior: 'smooth',
  });
  refs.homeMainScrollUp.style.display = 'none';
}
