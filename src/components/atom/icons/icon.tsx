import * as React from 'react';
import {
  ResponsiveValue,
  SpacingProps,
  SpacingShorthandProps,
  composeRestyleFunctions,
  spacing,
  useRestyle,
} from '@shopify/restyle';
import {Theme} from '../../../themes/theme';
import {
  AntDesignIcon,
  FeatherIcon,
  EntypoIcons,
  EvilIconsI,
  FontistoIcon,
  IoniconsIcon,
  ZocialIcons,
  MaterialCommunityIconsI,
  MaterialIconsI,
  OcticonsI,
  FontAwesome5Icon,
} from './import-icon';
import {useDecodeRestyleColor} from '../../../hooks';

type IconRestyleProps = SpacingProps<Theme> & SpacingShorthandProps<Theme>;

const restyle = composeRestyleFunctions<Theme, IconRestyleProps>([spacing]);

type NativeBaseIconProps = IconRestyleProps & {
  name: string;
  size?: number;
  color: ResponsiveValue<keyof Theme['colors'], Theme>;
};

const AntDesign = (Props: NativeBaseIconProps) => {
  const {name, size = 20, color, ...rest} = Props;

  const props = useRestyle(restyle, rest as any);
  const {color: iconColor} = useDecodeRestyleColor(color);

  return <AntDesignIcon {...props} name={name} color={iconColor} size={size} />;
};

const Entypo = (Props: NativeBaseIconProps) => {
  const {name, size = 20, color, ...rest} = Props;

  const props = useRestyle(restyle, rest as any);
  const {color: iconColor} = useDecodeRestyleColor(color);

  return <EntypoIcons {...props} name={name} color={iconColor} size={size} />;
};

const EvilIcons = (Props: NativeBaseIconProps) => {
  const {name, size = 20, color, ...rest} = Props;

  const props = useRestyle(restyle, rest as any);
  const {color: iconColor} = useDecodeRestyleColor(color);

  return <EvilIconsI {...props} name={name} color={iconColor} size={size} />;
};

const Fontisto = (Props: NativeBaseIconProps) => {
  const {name, size = 20, color, ...rest} = Props;

  const props = useRestyle(restyle, rest as any);
  const {color: iconColor} = useDecodeRestyleColor(color);

  return <FontistoIcon {...props} name={name} color={iconColor} size={size} />;
};

const Ionicons = (Props: NativeBaseIconProps) => {
  const {name, size = 20, color, ...rest} = Props;

  const props = useRestyle(restyle, rest as any);
  const {color: iconColor} = useDecodeRestyleColor(color);

  return <IoniconsIcon {...props} name={name} color={iconColor} size={size} />;
};

const Zocial = (Props: NativeBaseIconProps) => {
  const {name, size = 20, color, ...rest} = Props;

  const props = useRestyle(restyle, rest as any);
  const {color: iconColor} = useDecodeRestyleColor(color);

  return <ZocialIcons {...props} name={name} color={iconColor} size={size} />;
};

const MaterialCommunityIcons = (Props: NativeBaseIconProps) => {
  const {name, size = 20, color, ...rest} = Props;

  const props = useRestyle(restyle, rest as any);
  const {color: iconColor} = useDecodeRestyleColor(color);

  return (
    <MaterialCommunityIconsI
      {...props}
      name={name}
      color={iconColor}
      size={size}
    />
  );
};
const MaterialIcons = (Props: NativeBaseIconProps) => {
  const {name, size = 20, color, ...rest} = Props;

  const props = useRestyle(restyle, rest as any);
  const {color: iconColor} = useDecodeRestyleColor(color);

  return (
    <MaterialIconsI {...props} name={name} color={iconColor} size={size} />
  );
};

const Octicons = (Props: NativeBaseIconProps) => {
  const {name, size = 20, color, ...rest} = Props;

  const props = useRestyle(restyle, rest as any);
  const {color: iconColor} = useDecodeRestyleColor(color);

  return <OcticonsI {...props} name={name} color={iconColor} size={size} />;
};
const FontAwesome5 = (Props: NativeBaseIconProps) => {
  const {name, size = 20, color, ...rest} = Props;

  const props = useRestyle(restyle, rest as any);
  const {color: iconColor} = useDecodeRestyleColor(color);

  return (
    <FontAwesome5Icon {...props} name={name} color={iconColor} size={size} />
  );
};

const Feather = (Props: NativeBaseIconProps) => {
  const {name, size = 20, color, ...rest} = Props;

  const props = useRestyle(restyle, rest as any);
  const {color: iconColor} = useDecodeRestyleColor(color);

  return <FeatherIcon {...props} name={name} color={iconColor} size={size} />;
};

export {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  Fontisto,
  Zocial,
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
  FontAwesome5,
};
