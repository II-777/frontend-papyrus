import axios from 'axios';
import {Spinner} from 'spin.js';

import { refs } from './refs-elements';

const BASE_URL = 'https://books-backend.p.goit.global/books/';

const opts = {
  zIndex: 100,
};
let spinner = new Spinner(opts);

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
    spinner.spin(refs.spinner);
    const requestUrl = `${BASE_URL}${this.url}${this.selectedCategory}${this._id}`;

    try {
      const response = await requestWithRetry(requestUrl);
      return response.data;
    } catch (error) {
      console.log(error.message);
      return null;
    } finally {
      spinner.stop();
    }
  };

};

export const instanceApiServiceCategoryList = new ApiService('category-list');
export const instanceApiServiceTopBooks = new ApiService('top-books');
export const instanceApiSelectedCategory = new ApiService('category?category=');
export const instanceApiBookID = new ApiService('');


