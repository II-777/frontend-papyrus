import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { instanceApiSelectedCategory } from '../api-service';

export async function getBooksInCategory(category) {
  try {
    instanceApiSelectedCategory.selectedCategory = encodeURIComponent(category);
    const objectResolve = await instanceApiSelectedCategory.fetchPhoto();

    if (!Array.isArray(objectResolve)) {
      Notify.failure(
        'The book service is busy right now. Please try that category again.'
      );
      return [];
    }

    if (objectResolve.length === 0) {
      Notify.failure(
        'There are no books in this category.'
      );
      return [];
    }

    return objectResolve;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}
