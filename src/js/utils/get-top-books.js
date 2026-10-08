import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { instanceApiServiceTopBooks } from '../api-service';

export async function getTopBooks() {
  try {
    const objectResolve = await instanceApiServiceTopBooks.fetchPhoto();

    if (!Array.isArray(objectResolve)) {
      Notify.failure(
        'The book service is busy right now. Please try again.'
      );
      return [];
    }

    if (objectResolve.length === 0) {
      Notify.failure(
        'No bestsellers are available right now.'
      );
      return [];
    }

    return objectResolve;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}
