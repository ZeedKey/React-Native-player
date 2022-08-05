import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

export const HomeIcon = (props: SvgProps) => {
  const theme = useTheme();
  return (
    <Svg width={30} height={30} fill="none" viewBox="0 0 96 96" {...props}>
      <Path
        d="M40 80V56h16v24h20V48h12L48 12 8 48h12v32h20Z"
        fill={theme.color.secondary}
      />
    </Svg>
  );
};
