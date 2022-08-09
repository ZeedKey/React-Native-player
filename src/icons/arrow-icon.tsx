import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

export const ArrowIcon = (props: SvgProps) => {
  const theme = useTheme();
  return (
    <Svg width={25} height={25} fill="none" {...props}>
      <Path
        d="m3.196 12.79 6.4-6.4m-6.4 6.4 6.4 6.4m-6.4-6.4h20"
        stroke={theme.color.secondary}
        strokeWidth={2}
      />
    </Svg>
  );
};
