import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { instanceApiBookID } from '../api-service';

export async function getBookId(id) {
    try {
        instanceApiBookID._id = id;
        const objectResolve = await instanceApiBookID.fetchPhoto();

        if (!objectResolve || typeof objectResolve !== 'object') {
          Notify.failure(
            'The book service is busy right now. Please try again.'
          );
          return null;
        }

        return objectResolve;
      } catch (error) {
        console.log(error.message);
        return null;
      } 
}