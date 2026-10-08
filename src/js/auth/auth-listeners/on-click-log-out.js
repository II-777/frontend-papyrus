import { signOut } from "firebase/auth";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { auth } from "./auth-config-firebase";
import { refs } from "../../refs-elements";
import { authErrorMessage } from "./auth-notify";

export function onClickLogOut() {
  signOut(auth).then(() => {
    Notify.success('You have logged out.');
    refs.headerNav.setAttribute('hidden', true);
  }).catch((error) => {
    Notify.failure(authErrorMessage(error));
  });
}