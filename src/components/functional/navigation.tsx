import React from 'react';
import {State, usePlaybackState} from 'react-native-track-player';
import {usePlayer} from '~hooks';
import {PreviousIcon, NextIcon, PauseIcon, PlayIcon} from '~icons';
import styled from 'styled-components/native';
import {ifElse, equals} from 'ramda';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const PlayerNavigation: React.FC = () => {
  const {pause, play, toPrevious, toNext} = usePlayer();
  const state = usePlaybackState();

  const renderButton = ifElse(
    equals(State.Playing),
    () => (
      <TouchableOpacity onPress={pause}>
        <PauseIcon />
      </TouchableOpacity>
    ),
    () => (
      <TouchableOpacity onPress={play}>
        <PlayIcon />
      </TouchableOpacity>
    ),
  );

  return (
    <Navigation>
      <TouchableOpacity onPress={toPrevious}>
        <PreviousIcon />
      </TouchableOpacity>
      {renderButton(state)}
      <TouchableOpacity onPress={toNext}>
        <NextIcon />
      </TouchableOpacity>
    </Navigation>
  );
};

const Navigation = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 60%;
`;
