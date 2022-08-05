import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

export const PlayIcon = ({width = 39, height = 42, ...props}: SvgProps) => {
  const theme = useTheme();
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 96 96"
      {...props}>
      <Path d="M32 20v56l44-28-44-28Z" fill={theme.color.secondary} />
    </Svg>
  );
};
