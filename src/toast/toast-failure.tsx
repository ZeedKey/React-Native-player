import Toast from 'react-native-toast-message';

export const showFailureToast = () =>
  Toast.show({
    type: 'error',
    text1: 'An error has occured while adding the song ❌',
    text2: 'Try again or try another song!',
  });
