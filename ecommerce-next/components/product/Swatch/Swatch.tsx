import { FC } from "react";
import s from "./Swatch.module.css";
import cn from "classnames";
import { Check } from "@components/icons";
import { isDark } from "@lib/color";

interface Props {
  color?: string;
  label?: string;
  active?: boolean;
  variant: "size" | "color" | string;
  onClick: () => void;
}

const Swatch: FC<Props> = ({ color, label, variant, active, ...rest }) => {
  label = label?.toLowerCase();
  variant = variant?.toLocaleLowerCase();

  // Add classes depending of the Choices of options for the product
  const rootClassName = cn(s.root, {
    [s.active]: active,
    [s.color]: color,
    [s.size]: variant === "size",
    // checks if the color is beyond visible as white or dark
    [s.dark]: color && isDark(color),
  });
  return (
    <button
      className={rootClassName}
      style={color ? { backgroundColor: color } : {}}
      {...rest}
    >
      {variant === "color" && active && (
        <span>
          <Check />
        </span>
      )}

      {variant === "size" ? label : null}
    </button>
  );
};

export default Swatch;
