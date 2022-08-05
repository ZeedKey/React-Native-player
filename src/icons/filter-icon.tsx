import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const FilterIcon = (props: SvgProps) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Path
      d="M24.89 5.99h-13.6m0 0a3.2 3.2 0 1 0-6.4 0m6.4 0a3.2 3.2 0 1 1-6.4 0m0 0h-4m24 12.8h-4m0 0a3.2 3.2 0 1 0-6.4 0m6.4 0a3.2 3.2 0 1 1-6.4 0m0 0H.89"
      stroke="#EAF0FF"
      strokeWidth={2}
    />
  </Svg>
);
