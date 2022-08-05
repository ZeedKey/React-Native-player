import Toast from 'react-native-toast-message';

export const showSuccessToast = () =>
  Toast.show({
    type: 'success',
    text1: 'Successfully added the song ✅',
  });
