import React, {useEffect, useState} from 'react';
import TrackPlayer, {
  Event,
  RepeatMode,
  Track,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {RepeatIcon, ShuffleIcon} from '~icons';
import {Body1} from '~typography';
import {normalize} from '~utils';
import styled, {useTheme} from 'styled-components/native';
import {Dimensions} from 'react-native';
import {PlayerNavigation, ProgressBar} from 'src/components';
import {usePlayer} from 'src/hooks';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {andThen, equals, pipe, not, ifElse} from 'ramda';

const progressWidth = Dimensions.get('window').width - 55;

export const PlayingControls: React.FC = () => {
  const theme = useTheme();
  const [repeatMode, setRepeat] = useState<RepeatMode>(RepeatMode.Off);
  const {position, duration} = useProgress();
  const {toggleRepeat} = usePlayer();

  const fill = ifElse(
    equals(true),
    () => theme.color.secondary,
    () => theme.color.optional_2,
  );

  const toggleRepeatMode = () => toggleRepeat();

  useEffect(() => {
    pipe(TrackPlayer.getRepeatMode, andThen(setRepeat))();
  }, [toggleRepeatMode]);

  return (
    <>
      <Panel>
        <Double>
          <TouchableOpacity onPress={toggleRepeatMode}>
            <RepeatIcon fill={fill(repeatMode === RepeatMode.Track)} />
          </TouchableOpacity>
        </Double>
      </Panel>
      <Controls>
        <Timing>
          <Time>{normalize(position)}</Time>
          <Time>{normalize(duration)}</Time>
        </Timing>
        <ProgressBar width={progressWidth} borderRadius={10} />
        <Navigation>
          <PlayerNavigation />
        </Navigation>
      </Controls>
    </>
  );
};

const Panel = styled.View`
  margin-top: 100px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
const Double = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const Controls = styled.View`
  margin-top: 30%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const Navigation = styled.View`
  margin-top: 10%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const Timing = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5%;
`;
const Time = styled(Body1)`
  color: ${props => props.theme.color.optional_2};
`;
