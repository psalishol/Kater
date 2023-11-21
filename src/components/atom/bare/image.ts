import {createBox} from '@shopify/restyle';
import {ViewProps} from 'react-native';
import {Theme} from '../../../themes/theme';

import FastImage, {FastImageProps} from 'react-native-fast-image';

const Image = createBox<Theme, FastImageProps & ViewProps>(FastImage);
export type ImageProps = React.ComponentProps<typeof Image>;
export default Image;
