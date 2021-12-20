import { ReactNode, FC, ComponentType, HTMLAttributes } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  el?: ComponentType<HTMLAttributes<HTMLElement>>;
}

const Container: FC<Props> = ({ children, el: ComponentElement = "div" }) => {
  return (
    <ComponentElement className="px-6 mx-auto max-w-8xl">
      {children}
    </ComponentElement>
  );
};

export default Container;
