import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const ShuffleIcon = (props: SvgProps) => (
  <Svg width={21} height={21} fill="none" viewBox="0 0 21 21" {...props}>
    <Path
      d="M15.196 7.983a.833.833 0 1 0 1.667 0V4.39a.833.833 0 0 0-.834-.833h-3.583a.833.833 0 0 0 0 1.666h1.575L10.196 9.05 5.33 4.191a.833.833 0 0 0-1.175 1.175l4.859 4.859-5.242 5.241a.834.834 0 0 0 .271 1.366.833.833 0 0 0 .912-.183L15.196 6.409v1.575Z"
      fill="#8996B8"
      fillOpacity={0.6}
    />
    <Path
      d="M16.03 11.624a.834.834 0 0 0-.834.834v1.591l-2.317-2.324a.836.836 0 1 0-1.183 1.183l2.308 2.317h-1.566a.834.834 0 1 0 0 1.666h3.591a.833.833 0 0 0 .834-.925v-3.508a.833.833 0 0 0-.834-.834Z"
      fill="#8996B8"
      fillOpacity={0.6}
    />
  </Svg>
);
