
import { forwardRef } from "react";
import type { ExinoiconsIconProps } from "./ExinoiconsIcon";
import ExinoiconsIcon from "./ExinoiconsIcon";
import type { IconSvgElement } from "./ExinoiconsIcon";

export function createIconComponent(iconData: IconSvgElement) {
  const IconComponent = forwardRef<SVGSVGElement, Omit<ExinoiconsIconProps, "icon">>(
    (props, ref) => (
      <ExinoiconsIcon
        {...props}
        icon={iconData}
        ref={ref}
      />
    ),
  );

  IconComponent.displayName = "ExinoiconsIcon";

  return IconComponent;
}
