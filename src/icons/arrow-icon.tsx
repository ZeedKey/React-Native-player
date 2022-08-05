import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const ArrowIcon = (props: SvgProps) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Path
      d="m3.196 12.79 6.4-6.4m-6.4 6.4 6.4 6.4m-6.4-6.4h20"
      stroke="#EAF0FF"
      strokeWidth={2}
    />
  </Svg>
);
