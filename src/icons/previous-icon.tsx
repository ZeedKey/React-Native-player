import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const PreviousIcon = ({width = 30, height = 33, ...props}: SvgProps) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      d="m27.028 26.859-.92 1.185a1.5 1.5 0 0 0 2.42-1.185h-1.5Zm0-21.13h1.5a1.5 1.5 0 0 0-2.42-1.185l.92 1.185ZM13.417 16.294l-.92-1.185a1.5 1.5 0 0 0 0 2.37l.92-1.185ZM28.528 26.86V5.729h-3v21.13h3Zm-2.42-22.315L12.498 15.11l1.839 2.37 13.61-10.565-1.839-2.37ZM12.498 17.48l13.61 10.565 1.84-2.37L14.337 15.11l-1.84 2.37ZM5.194 27.916V4.673h-3v23.242h3Z"
      fill="#EAF0FF"
    />
  </Svg>
);
