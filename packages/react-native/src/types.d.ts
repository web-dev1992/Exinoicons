import { ForwardRefExoticComponent, RefAttributes } from "react";
import { SvgProps, Svg } from "react-native-svg";
import { StyleProp, ViewStyle } from "react-native";

export type IconSvgElement = readonly (readonly [
  string,
  {
    readonly [key: string]: string | number;
  },
])[];

export interface ExinoiconsProps extends SvgProps {
  size?: string | number;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
  className?: string;
  style?: StyleProp<ViewStyle>;
  icon: IconSvgElement;
  altIcon?: IconSvgElement;
  showAlt?: boolean;
}

export type ExinoiconsIconComponent = ForwardRefExoticComponent<
  ExinoiconsProps & RefAttributes<Svg>
>;

declare module "@exinoicons/react-native" {
  export const ExinoiconsIcon: ExinoiconsIconComponent;
  export type { ExinoiconsProps, IconSvgElement, ExinoiconsIconComponent };
}
