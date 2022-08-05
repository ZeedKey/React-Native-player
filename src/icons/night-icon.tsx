import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

export const NightIcon = (props: SvgProps) => {
  const theme = useTheme();
  return (
    <Svg width={30} height={30} fill="none" viewBox="0 0 96 96" {...props}>
      <Path
        d="M48.04 48c0-14.28 8.8-26.48 21.24-31.48 3.56-1.44 3-6.76-.76-7.6-4.4-.96-9.08-1.2-13.92-.56-18.04 2.4-32.48 17.24-34.36 35.32C17.76 67.72 36.52 88 60.04 88c2.92 0 5.72-.32 8.48-.92 3.8-.84 4.4-6.12.8-7.6C56.44 74.32 48 61.84 48.04 48Z"
        fill={theme.color.secondary}
      />
    </Svg>
  );
};
