import {createEvent, createStore} from 'effector';
import {DocumentPickerResponse} from 'react-native-document-picker';

type SongsStoreType = {
  cachedSongs: DocumentPickerResponse[];
  filteredSongs: DocumentPickerResponse[] | null;
  filter: string;
};

export const setSongs = createEvent<DocumentPickerResponse[]>('setSongs');
export const setFilter = createEvent<string>('');

export const $songs = createStore<SongsStoreType>({
  cachedSongs: [],
  filteredSongs: null,
  filter: '',
})
  .on(setSongs, (state, payload) => ({
    ...state,
    cachedSongs: [...state.cachedSongs, ...payload],
  }))
  .on(setFilter, (state, payload) => ({
    ...state,
    filter: payload,
    filteredSongs: state.cachedSongs.filter(song =>
      song.name.includes(payload),
    ),
  }));
