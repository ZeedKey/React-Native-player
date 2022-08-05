import React, {useCallback} from 'react';
import TrackPlayer, {useProgress} from 'react-native-track-player';
import {VolumeIcon, RepeatIcon, ShuffleIcon} from '~icons';
import {Body1} from '~typography';
import {normalize} from '~utils';
import styled, {useTheme} from 'styled-components/native';
import {Dimensions} from 'react-native';
import {PlayerNavigation, ProgressBar} from 'src/components';
import {usePlayer} from 'src/hooks';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ifElse, equals} from 'ramda';

const progressWidth = Dimensions.get('window').width - 55;

export const PlayingControls: React.FC = () => {
  const {position, duration} = useProgress();
  const theme = useTheme();
  const {toggleRepeat} = usePlayer();
  
  const fill = ifElse(
    equals(true),
    () => theme.color.secondary,
    () => theme.color.optional_2,
  );

  const toggleRepeatMode = useCallback(() => toggleRepeat(), [toggleRepeat]);

  return (
    <>
      <Panel>
        <VolumeIcon />
        <Double>
          <TouchableOpacity onPress={toggleRepeatMode}>
            <RepeatIcon fill={fill(true)} />
          </TouchableOpacity>
          <ShuffleIcon />
        </Double>
      </Panel>
      <Controls>
        <Timing>
          <Time>{normalize(position)}</Time>
          <Time>{normalize(duration)}</Time>
        </Timing>
        <ProgressBar width={progressWidth} />
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
  width: 60px;
  flex-direction: row;
  justify-content: space-between;
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
