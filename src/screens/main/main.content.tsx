import React from 'react';
import {H2} from '~typography';
import styled from 'styled-components/native';
import {PlayerLayout, ScreenLayout} from '~layouts';
import {useStore} from 'effector-react';
import {FlatList} from 'react-native';
import {andThen, equals, pipe} from 'ramda';
import {Song} from '~components';
import {$songs} from '~store';
import TrackPlayer from 'react-native-track-player';
import {DocumentPickerResponse} from 'react-native-document-picker';

export const MainScreen: React.FC = () => {
  const {filteredSongs, cachedSongs} = useStore($songs);

  const renderSong = ({item}: {item: DocumentPickerResponse}) => (
    <Song
      onPress={() => onSongPress(item)}
      label={item.name}
      description={item.name}
    />
  );

  const onSongPress = async (song: DocumentPickerResponse) => {
    await TrackPlayer.getQueue().then(console.log);
    await TrackPlayer.stop();

    pipe(
      TrackPlayer.getQueue,
      andThen(queue =>
        queue.findIndex(queueSong => equals(queueSong.url)(song.uri)),
      ),
      andThen(TrackPlayer.skip),
    )();
    await TrackPlayer.play().catch(console.log);
  };

  return (
    <ScreenLayout>
      <PlayerLayout>
        <Title>My songs</Title>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={filteredSongs ?? cachedSongs}
          numColumns={1}
          CellRendererComponent={renderSong}
        />
      </PlayerLayout>
    </ScreenLayout>
  );
};

const Title = styled(H2)`
  margin-top: 30px;
  margin-bottom: 30px;
  color: ${props => props.theme.color.secondary};
  font-family: ${props => props.theme.font.bold};
`;
