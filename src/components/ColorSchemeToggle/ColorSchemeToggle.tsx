import { FC } from "react";
import { ReactNode } from "react";
import { useTheme } from "styled-components";

import { Button } from "src/components/Button";

export type ColorSchemeToggleProps = {
  on: ReactNode;
  off: ReactNode;
};

export const ColorSchemeToggle: FC<ColorSchemeToggleProps> = (props) => {
  const { on, off } = props;
  const theme = useTheme();

  const handleClick = () => {
    theme.toggleColorScheme();
  };

  return (
    <Button onClick={handleClick}>
      {theme.colorScheme === "dark" ? on : off}
    </Button>
  );
};
