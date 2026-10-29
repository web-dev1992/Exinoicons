
import {
  createElement,
  forwardRef,
  type ForwardRefExoticComponent,
  type RefAttributes,
  type SVGProps,
} from "react";

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
};

export type IconSvgElement = readonly (
  readonly [
    string,
    { readonly [key: string]: string | number },
  ]
)[];

export type SVGAttributes = SVGProps<SVGSVGElement>;

type ComponentAttributes = SVGAttributes &
  RefAttributes<SVGSVGElement>;

export interface ExinoiconsProps extends ComponentAttributes {
  size?: string | number;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
  altIcon?: IconSvgElement;
  showAlt?: boolean;
  icon?: IconSvgElement;
  primaryColor?: string;
  secondaryColor?: string;
  disableSecondaryOpacity?: boolean;
}

export interface ExinoiconsIconProps
  extends Omit<ExinoiconsProps, "ref" | "altIcon"> {
  icon: IconSvgElement;
  altIcon?: IconSvgElement;
}

export type ExinoiconsIcon = ForwardRefExoticComponent<
  ExinoiconsIconProps & RefAttributes<SVGSVGElement>
>;

export const ExinoiconsIcon = forwardRef<
  SVGSVGElement,
  ExinoiconsIconProps
>(
  (
    {
      color = "currentColor",
      size = 24,
      strokeWidth,
      absoluteStrokeWidth = false,
      className = "",
      altIcon,
      showAlt = false,
      icon,
      primaryColor,
      secondaryColor,
      disableSecondaryOpacity = false,
      ...rest
    },
    ref,
  ) => {
    const calculatedStrokeWidth =
      strokeWidth !== undefined
        ? absoluteStrokeWidth
          ? (Number(strokeWidth) * 24) / Number(size)
          : strokeWidth
        : undefined;

    const strokeProps: {
      stroke?: string;
      strokeWidth?: number;
    } =
      calculatedStrokeWidth !== undefined
        ? {
            strokeWidth: calculatedStrokeWidth,
            stroke: "currentColor",
          }
        : {};

    const elementProps = {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      color: primaryColor || color,
      className,
      ...strokeProps,
      ...rest,
    };

    const currentIcon = showAlt && altIcon ? altIcon : icon;

    const svgChildren = [...currentIcon]
      .sort(([, a], [, b]) => {
        const hasOpacityA = a.opacity !== undefined;
        const hasOpacityB = b.opacity !== undefined;

        return hasOpacityB ? 1 : hasOpacityA ? -1 : 0;
      })
      .map(([tag, attrs], index) => {
        const isSecondaryPath = attrs.opacity !== undefined;

        const pathOpacity =
          isSecondaryPath && !disableSecondaryOpacity
            ? attrs.opacity
            : undefined;

        const fillProps = secondaryColor
          ? {
              ...(attrs.stroke !== undefined
                ? {
                    stroke: isSecondaryPath
                      ? secondaryColor
                      : primaryColor || color,
                  }
                : {
                    fill: isSecondaryPath
                      ? secondaryColor
                      : primaryColor || color,
                  }),
            }
          : {};

        return createElement(tag, {
          ...attrs,
          ...strokeProps,
          ...fillProps,
          opacity: pathOpacity,
          key: attrs.key ?? index,
        });
      });

    return createElement("svg", elementProps, svgChildren);
  },
);

ExinoiconsIcon.displayName = "ExinoiconsIcon";

export default ExinoiconsIcon;
