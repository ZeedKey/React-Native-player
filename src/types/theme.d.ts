import { lightTheme,darkTheme } from "~theme";

export type DefaultThemeType = typeof darkTheme;

export type GlobalThemeType = typeof darkTheme | typeof lightTheme

declare module 'styled-components' {
    export interface DefaultTheme extends DefaultThemeType {}
}

declare module 'styled-components/native' {
    export interface DefaultTheme extends DefaultThemeType {}
}