const AUTH_ERRORS = {
  'auth/email-already-in-use':
    'An account with this email already exists. Sign in instead.',
  'auth/invalid-email': 'Enter a valid email address.',
  'auth/missing-email': 'Enter your email address.',
  'auth/missing-password': 'Enter your password.',
  'auth/weak-password': 'Use a password with at least 6 characters.',
  'auth/user-not-found': 'No account found for that email.',
  'auth/wrong-password': 'That password is incorrect.',
  'auth/invalid-credential': 'Email or password is incorrect.',
  'auth/invalid-login-credentials': 'Email or password is incorrect.',
  'auth/user-disabled': 'This account has been disabled.',
  'auth/too-many-requests': 'Too many attempts. Wait a moment and try again.',
  'auth/network-request-failed': 'Check your connection and try again.',
};

export function authErrorMessage(error) {
  return (
    AUTH_ERRORS[error?.code] || 'Something went wrong. Please try again.'
  );
}
