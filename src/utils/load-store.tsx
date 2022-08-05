import AsyncStorage from '@react-native-async-storage/async-storage';
import {andThen, defaultTo, map, pipe} from 'ramda';
export const loadStore = pipe(
  AsyncStorage.getAllKeys,
  andThen(AsyncStorage.multiGet),
  andThen(
    map(item => {
      return {
        name: item[0],
        uri: defaultTo('')(item[1]),
        copyError: undefined,
        fileCopyUri: null,
        type: null,
        size: null,
      };
    }),
  ),
);
