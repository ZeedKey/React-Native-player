import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

export const MoreIcon = (props: SvgProps) => {
  const theme = useTheme();
  return (
    <Svg width={30} height={30} fill="none" viewBox="0 0 96 96" {...props}>
      <Path
        d="M48 32c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8Zm0 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm0 24c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Z"
        fill={theme.color.secondary}
      />
    </Svg>
  );
};
