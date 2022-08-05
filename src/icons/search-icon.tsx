import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

export const SearchIcon = (props: SvgProps) => {
  const theme = useTheme();
  return (
    <Svg width={33} height={33} fill="none" viewBox="0 0 96 96" {...props}>
      <Path
        d="M55 57h-3.16l-1.12-1.08A25.885 25.885 0 0 0 57 39c0-14.36-11.64-26-26-26S5 24.64 5 39s11.64 26 26 26c6.44 0 12.36-2.36 16.92-6.28L49 59.84V63l20 19.96L74.96 77 55 57Zm-24 0c-9.96 0-18-8.04-18-18s8.04-18 18-18 18 8.04 18 18-8.04 18-18 18Z"
        fill={theme.color.secondary}
      />
    </Svg>
  );
};
