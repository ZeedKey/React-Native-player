import AsyncStorage from '@react-native-async-storage/async-storage';
import {DocumentPickerResponse} from 'react-native-document-picker';

export const saveStore = (store: DocumentPickerResponse[]) => {
  for (let [_, value] of store.entries()) {
    AsyncStorage.setItem(
      value.name,
      JSON.stringify({name: value.name, uri: value.uri}),
    );
  }
};
