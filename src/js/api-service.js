import axios from 'axios';
import { Spinner } from 'spin.js';
import 'spin.js/spin.css';

const BASE_URL = 'https://books-backend.p.goit.global/books/';

const spinner = new Spinner({
  zIndex: 20,
  scale: 1.35,
  color: '#4F2EE8',
});
let pendingBookRequests = 0;

function bookSpinnerHost() {
  return document.querySelector('.books-spinner');
}

function startBookSpinner() {
  const host = bookSpinnerHost();
  if (!host) {
    return;
  }

  pendingBookRequests += 1;
  if (pendingBookRequests > 1) {
    return;
  }

  spinner.opts.color = document.body.classList.contains('dark-theme')
    ? '#ffffff'
    : '#4F2EE8';
  host.classList.add('is-loading');
  host.setAttribute('aria-busy', 'true');
  spinner.spin(host);
}

function stopBookSpinner() {
  pendingBookRequests = Math.max(0, pendingBookRequests - 1);
  if (pendingBookRequests > 0) {
    return;
  }

  spinner.stop();
  const host = bookSpinnerHost();
  host?.classList.remove('is-loading');
  host?.setAttribute('aria-busy', 'false');
}

async function requestWithRetry(url) {
  const delays = [0, 700, 1500];
  let lastError;

  for (const delay of delays) {
    if (delay) {
      await new Promise(resolve => setTimeout(resolve, delay));
    }

    try {
      return await axios.get(url);
    } catch (error) {
      lastError = error;
      const status = error.response?.status;
      if (status !== 429 && status !== 500 && status !== 503) {
        throw error;
      }
    }
  }

  throw lastError;
}

class ApiService {
  constructor(url) {
    this.url = url;
    this.selectedCategory = '';
    this._id = '';
  }

  async fetchPhoto() {
    const showsSpinner = this.url === 'top-books' || this.url.startsWith('category?');
    if (showsSpinner) {
      startBookSpinner();
    }
    const requestUrl = `${BASE_URL}${this.url}${this.selectedCategory}${this._id}`;

    try {
      const response = await requestWithRetry(requestUrl);
      return response.data;
    } catch (error) {
      console.log(error.message);
      return null;
    } finally {
      if (showsSpinner) {
        stopBookSpinner();
      }
    }
  }

};

export const instanceApiServiceCategoryList = new ApiService('category-list');
export const instanceApiServiceTopBooks = new ApiService('top-books');
export const instanceApiSelectedCategory = new ApiService('category?category=');
export const instanceApiBookID = new ApiService('');


