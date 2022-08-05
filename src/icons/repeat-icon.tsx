import {defaultTo} from 'ramda';
import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {useTheme} from 'styled-components/native';

export const RepeatIcon = ({fill, ...props}: SvgProps) => {
  const theme = useTheme();
  const pathFill = defaultTo(theme.color.optional_2)(fill);
  return (
    <Svg width={21} height={21} fill="none" viewBox="0 0 21 21" {...props}>
      <Path
        d="M6.63 6.058h8.333v1.491c0 .375.45.559.709.292l2.325-2.325a.413.413 0 0 0 0-.592L15.672 2.6a.416.416 0 0 0-.709.3v1.492H5.797a.836.836 0 0 0-.834.833v3.334c0 .458.375.833.834.833a.836.836 0 0 0 .833-.833v-2.5Zm8.333 8.333H6.63V12.9a.412.412 0 0 0-.708-.291l-2.325 2.325a.413.413 0 0 0 0 .591l2.325 2.325a.418.418 0 0 0 .708-.3v-1.491h9.167a.836.836 0 0 0 .833-.833V11.89a.836.836 0 0 0-.833-.833.836.836 0 0 0-.834.833v2.5Z"
        fill={pathFill}
        fillOpacity={0.6}
      />
    </Svg>
  );
};
