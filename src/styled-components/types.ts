export type ColorScheme = "light" | "dark";

export interface Theme {
  colorScheme: ColorScheme;
  toggleColorScheme: (colorScheme?: ColorScheme) => void;

  colors: {
    primary: string;
    secondary: string;
  };
}
