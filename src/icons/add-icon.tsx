import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

export const AddIcon = (props: SvgProps) => {
  const theme = useTheme();
  return (
    <Svg width={30} height={30} fill="none" {...props} viewBox="0 0 96 96">
      <Path
        d="M48 8C25.92 8 8 25.92 8 48s17.92 40 40 40 40-17.92 40-40S70.08 8 48 8Zm20 44H52v16h-8V52H28v-8h16V28h8v16h16v8Z"
        fill={theme.color.secondary}
      />
    </Svg>
  );
};
