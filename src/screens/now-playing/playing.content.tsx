import React, {useState} from 'react';
import styled from 'styled-components/native';
import {ScreenLayout} from '~layouts';
import {Card} from '~components';
import {PlayingControls} from './playing.controls';
import {useFocusEffect} from '@react-navigation/native';
import TrackPlayer, {Track} from 'react-native-track-player';
import {defaultTo, prop} from 'ramda';

export const PlayingScreen: React.FC = () => {
  const [track, setTrack] = useState<Track | null>(null);
  const defaultToEmpty = defaultTo({title: '', description: ''});

  useFocusEffect(() => {
    TrackPlayer.getCurrentTrack().then(TrackPlayer.getTrack).then(setTrack);
  });

  return (
    <ScreenLayout>
      <Screen>
        <Content>
          <Card
            label={prop('title', defaultToEmpty(track))}
            description={prop('description', defaultToEmpty(track))}
          />
        </Content>
        <PlayingControls />
      </Screen>
    </ScreenLayout>
  );
};

const Screen = styled.View`
  height: 100%;
  align-items: center;
`;
const Content = styled.View`
  margin-top: 100px;
`;
