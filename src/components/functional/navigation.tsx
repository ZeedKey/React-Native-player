import React from 'react';
import {State, usePlaybackState} from 'react-native-track-player';
import {usePlayer} from '~hooks';
import {PreviousIcon, NextIcon, PauseIcon, PlayIcon} from '~icons';
import styled from 'styled-components/native';
import {ifElse, equals} from 'ramda';

export const PlayerNavigation: React.FC = () => {
  const {pause, play, toPrevious, toNext} = usePlayer();
  const state = usePlaybackState();

  const renderButton = ifElse(
    equals(State.Playing),
    () => <PauseIcon onPress={pause} />,
    () => <PlayIcon onPress={play} />,
  );

  return (
    <Navigation>
      <PreviousIcon onPress={toPrevious} />
      {renderButton(state)}
      <NextIcon onPress={toNext} />
    </Navigation>
  );
};

const Navigation = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 60%;
`;
