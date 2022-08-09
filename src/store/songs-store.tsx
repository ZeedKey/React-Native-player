import {createEvent, createStore} from 'effector';
import {DocumentPickerResponse} from 'react-native-document-picker';
import {persist} from 'effector-storage/rn/async';
import TrackPlayer from 'react-native-track-player';

type SongsStoreType = {
  cachedSongs: DocumentPickerResponse[];
  filteredSongs: DocumentPickerResponse[] | null;
  filter: string;
};

export const pushSongs = createEvent<DocumentPickerResponse[]>('setSongs');
export const setSongs = createEvent<DocumentPickerResponse[]>('setSongs');
export const setFilter = createEvent<string>('');

export const $songs = createStore<SongsStoreType>({
  cachedSongs: [],
  filteredSongs: null,
  filter: '',
})
  .on(setSongs, (state, payload) => ({
    ...state,
    cachedSongs: [...payload],
  }))
  .on(pushSongs, (state, payload) => ({
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
$songs.watch(
  async store =>
    await TrackPlayer.add(
      store.cachedSongs.map(cachedSong => ({
        url: cachedSong.uri,
        title: cachedSong.name,
        description: cachedSong.name,
        duration: 400,
      })),
    ),
);

persist({store: $songs, key: 'songs'});
