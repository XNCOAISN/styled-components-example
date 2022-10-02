import { FC, ReactNode, useState } from "react";
import { ThemeProvider as XThemeProvider } from "styled-components";
import { ColorScheme } from "./types";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";

export type ThemeProviderProps = {
  children?: ReactNode;
};

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children } = props;

  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme.colorScheme
  );

  const toggleColorScheme = (colorScheme?: boolean) => {
    setColorScheme((value) =>
      colorScheme ?? value === "dark" ? "light" : "dark"
    );
  };

  return (
    <XThemeProvider
      theme={{
        ...theme,
        colorScheme,
        toggleColorScheme,
      }}
    >
      <GlobalStyle />
      {children}
    </XThemeProvider>
  );
};
