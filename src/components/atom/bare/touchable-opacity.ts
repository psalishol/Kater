import {createBox} from '@shopify/restyle';
import {
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from 'react-native';
import {Theme} from '../../../themes/theme';

const TouchableOpacity = createBox<Theme, RNTouchableOpacityProps>(
  RNTouchableOpacity,
);

export type TouchableOpacityProps = typeof TouchableOpacity;
export default TouchableOpacity;
