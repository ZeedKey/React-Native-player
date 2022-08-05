import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

export const BurgerIcon = (props: SvgProps) => {
  const theme = useTheme();
  return (
    <Svg width={33} height={33} fill="none" viewBox="0 0 96 96" {...props}>
      <Path
        d="M12 72h72v-8H12v8Zm0-20h72v-8H12v8Zm0-28v8h72v-8H12Z"
        fill={theme.color.secondary}
      />
    </Svg>
  );
};
