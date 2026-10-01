import { refs } from './refs-elements';
let saveUserTheme = localStorage.getItem('user-theme') || 'light';

window.addEventListener('load', windowLoad);
function windowLoad() {
  if (localStorage.getItem('user-theme') === 'dark') {
    refs.bodyEl.classList.add('dark-theme');
  }
}
const onShoppingPage = window.location.pathname.includes('shopping-cart');
refs.headerHomeBtn.forEach(link => link.classList.toggle('current', !onShoppingPage));
refs.headerShoppingListBtn.forEach(link =>
  link.classList.toggle('current', onShoppingPage)
);
if (saveUserTheme === 'dark' && refs.toggleEl) {
  refs.toggleEl.checked = true;
}

refs.toggleEl.addEventListener('click', switchTheme);
export function switchTheme() {
  saveUserTheme === 'light'
    ? (saveUserTheme = 'dark')
    : (saveUserTheme = 'light');

  localStorage.setItem('user-theme', saveUserTheme);
  refs.bodyEl.classList.toggle('dark-theme');
}
