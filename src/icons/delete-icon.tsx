import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

export const DeleteIcon = (props: SvgProps) => {
  const theme = useTheme();
  return (
    <Svg width={25} height={25} fill="none" viewBox="0 0 96 96" {...props}>
      <Path
        d="M24 76c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V28H24v48Zm52-60H62l-4-4H38l-4 4H20v8h56v-8Z"
        fill={theme.color.secondary}
      />
    </Svg>
  );
};
