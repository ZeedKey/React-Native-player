import React from 'react';
import {H2} from '~typography';
import styled from 'styled-components/native';
import {PlayerLayout, ScreenLayout} from '~layouts';
import {useStore} from 'effector-react';
import {FlatList} from 'react-native';
import {head, last} from 'ramda';
import {Song} from '~components';
import {ROUTES} from 'src/navigation/routes';
import {$songs} from '~store';
import {useNavigation} from '~navigation';
import TrackPlayer from 'react-native-track-player';
import {DocumentPickerResponse} from 'react-native-document-picker';
import {parseName} from 'src/utils';

export const MainScreen: React.FC = () => {
  const {filteredSongs, cachedSongs} = useStore($songs);

  const navigation = useNavigation();

  const renderSong = ({item}: {item: DocumentPickerResponse}) => (
    <Song
      uri={''}
      onPress={() => onSongPress(item)}
      label={item.name}
      description={item.name}
    />
  );

  const onSongPress = async (song: DocumentPickerResponse) => {
    await TrackPlayer.add({
      url: song.uri,
      duration: 402,
      title: head(parseName(song.name)),
      description: last(parseName(song.name)),
    });
    await TrackPlayer.play();
    navigation.navigate(ROUTES.PLAYING);
  };

  return (
    <ScreenLayout>
      <PlayerLayout>
        <Title>My songs</Title>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={filteredSongs ?? cachedSongs}
          renderItem={renderSong}
          numColumns={1}
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
