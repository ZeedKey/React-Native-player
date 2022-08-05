import {defaultTo, ifElse, equals} from 'ramda';
import TrackPlayer, {RepeatMode, Track} from 'react-native-track-player';

export const usePlayer = () => {
  const defaultIndex = defaultTo(0);
  return {
    init: async () => await TrackPlayer.setupPlayer(),
    toNext: async () => await TrackPlayer.skipToNext(),
    toPrevious: async () => await TrackPlayer.skipToPrevious(),
    play: async () => await TrackPlayer.play(),
    pause: async () => await TrackPlayer.pause(),
    stop: async () => await TrackPlayer.stop(),
    add: async (song: Track) => await TrackPlayer.add(song),
    reset: async () => await TrackPlayer.reset(),
    seekTo: async (time: number) => await TrackPlayer.seekTo(time),
    destroy: async () => await TrackPlayer.destroy(),
    getCurrentTrack: async () =>
      await TrackPlayer.getCurrentTrack().then(trackIndex =>
        TrackPlayer.getTrack(defaultIndex(trackIndex)),
      ),
    toggleRepeat: async () =>
      ifElse(
        equals(RepeatMode.Track),
        async () => await TrackPlayer.setRepeatMode(RepeatMode.Off),
        async () => await TrackPlayer.setRepeatMode(RepeatMode.Track),
      )(await TrackPlayer.getRepeatMode()),
  };
};
