import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

export const SunIcon = (props: SvgProps) => {
  const theme = useTheme();
  return (
    <Svg width={30} height={30} fill="none" viewBox="0 0 96 96" {...props}>
      <Path
        d="m27.04 19.36-7.2-7.16-5.64 5.64L21.36 25l5.68-5.64ZM16 42H4v8h12v-8ZM52 2.2h-8V14h8V2.2Zm29.8 15.64-5.64-5.64L69 19.36 74.64 25l7.16-7.16Zm-12.84 54.8 7.16 7.2 5.64-5.64-7.2-7.16-5.6 5.6ZM80 42v8h12v-8H80ZM48 22c-13.24 0-24 10.76-24 24s10.76 24 24 24 24-10.76 24-24-10.76-24-24-24Zm-4 67.8h8V78h-8v11.8ZM14.2 74.16l5.64 5.64L27 72.6l-5.64-5.64-7.16 7.2Z"
        fill={theme.color.secondary}
      />
    </Svg>
  );
};
