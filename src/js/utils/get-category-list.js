import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { instanceApiServiceCategoryList } from '../api-service';

export async function getCategoryList() {
  try {
    const objectResolve = await instanceApiServiceCategoryList.fetchPhoto();

    if (!Array.isArray(objectResolve)) {
      Notify.failure(
        'The book service is busy right now. Please try again.'
      );
      return [];
    }

    if (objectResolve.length === 0) {
      Notify.failure(
        'No book categories are available right now.'
      );
      return [];
    }

    return objectResolve;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}
