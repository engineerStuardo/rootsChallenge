export const errorMessageHandler = (errorMessage: string) => {
  if (errorMessage.includes('400')) {
    return 'You have sent a request which could not be understood.';
  }

  if (errorMessage.includes('408')) {
    return 'Your client has failed to submit a request, and a timeout has occurred.';
  }

  if (errorMessage.includes('429')) {
    return 'You have requested this resource too often. Slow down.';
  }

  if (errorMessage.includes('500')) {
    return 'An error occurred on the server. No further information is available.';
  }

  if (errorMessage.includes('503')) {
    return 'The service is temporarily unavailable.';
  }

  return 'Something went wrong, please try again with another Country ISO';
};
