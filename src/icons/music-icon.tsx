import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

export const MusicIcon = ({width = 30, height = 30, ...props}: SvgProps) => {
  const theme = useTheme();
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 96 96"
      {...props}>
      <Path
        d="M48 12v37.12c-1.88-.68-3.88-1.12-6-1.12-9.96 0-18 8.04-18 18s8.04 18 18 18c9.24 0 16.8-7 17.8-16h.2V24h16V12H48Z"
        fill={theme.color.secondary}
      />
    </Svg>
  );
};
