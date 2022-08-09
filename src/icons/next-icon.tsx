import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

export const NextIcon = ({width = 30, height = 33, ...props}: SvgProps) => {
  const theme = useTheme();
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <Path
        d="m3.564 5.73.92-1.186a1.5 1.5 0 0 0-2.42 1.185h1.5Zm0 21.129h-1.5a1.5 1.5 0 0 0 2.42 1.185l-.92-1.185Zm13.611-10.565.92 1.185a1.5 1.5 0 0 0 0-2.37l-.92 1.185ZM2.065 5.73v21.13h3V5.729h-3Zm2.42 22.315 13.61-10.565-1.84-2.37-13.61 10.565 1.84 2.37Zm13.61-12.935L4.485 4.544l-1.84 2.37 13.61 10.565 1.84-2.37Zm7.303-10.436v23.242h3V4.674h-3Z"
        fill={theme.color.secondary}
      />
    </Svg>
  );
};
