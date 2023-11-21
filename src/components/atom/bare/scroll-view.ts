import {createBox} from '@shopify/restyle';
import {Theme} from '../../../themes/theme';
import {
  ScrollViewProps as NativeScrollViewProps,
  ScrollView as NativeScrollView,
} from 'react-native';

const ScrollView = createBox<Theme, NativeScrollViewProps>(NativeScrollView);
export type ScrollViewProps = React.ComponentProps<typeof ScrollView>;

export default ScrollView;
