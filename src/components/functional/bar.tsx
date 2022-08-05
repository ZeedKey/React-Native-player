import {defaultTo, divide, equals, multiply, pipe} from 'ramda';
import React from 'react';
import {Dimensions, GestureResponderEvent, ViewStyle} from 'react-native';
import {Bar, BarPropTypes} from 'react-native-progress';
import {useProgress} from 'react-native-track-player';
import {usePlayer} from 'src/hooks';
import styled from 'styled-components/native';

const barStyle: ViewStyle = {borderRadius: 0, height: 15};

export const ProgressBar: React.FC<BarPropTypes> = props => {
  const {seekTo} = usePlayer();
  const {position, duration} = useProgress();
  const defaultProgress = defaultTo(0)(divide(position, duration));
  const progressInsets = (Dimensions.get('window').width - props?.width) / 2;

  const seekToTime = (e: GestureResponderEvent) =>
    seekTo(
      multiply(
        duration,
        divide(e.nativeEvent.pageX - progressInsets, defaultTo(1)(props.width)),
      ),
    );

  return (
    <Button onPress={seekToTime}>
      <Bar
        {...props}
        progress={defaultProgress}
        color={'white'}
        {...barStyle}
      />
    </Button>
  );
};

const Button = styled.Pressable``;
