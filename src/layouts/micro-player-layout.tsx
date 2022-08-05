import {ifElse, equals} from 'ramda';
import React from 'react';
import {State, usePlaybackState} from 'react-native-track-player';
import {MicroPlayer} from 'src/components';

type PlayerLayoutProps = {
  children: React.ReactNode;
};

export const PlayerLayout: React.FC<PlayerLayoutProps> = ({children}) => {
  const state = usePlaybackState();

  const renderPlayer = ifElse(
    equals(State.None),
    () => <></>,
    () => <MicroPlayer />,
  )(state);

  return (
    <>
      {children}
      {renderPlayer}
    </>
  );
};
