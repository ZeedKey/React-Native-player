import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

export const PauseIcon = ({width = 39, height = 42, ...props}: SvgProps) => {
  const theme = useTheme();
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <Path
        d="M14.296 9.07v24.45m10-24.45v24.45"
        stroke={theme.color.secondary}
        strokeWidth={3}
      />
    </Svg>
  );
};
