import {createGlobalStyle} from "styled-components";

// 100: Thin;
// 200: Extra Light (Ultra Light);
// 300: Light;
// 400: Normal;
// 500: Medium;
// 600: Semi Bold (Demi Bold);
// 700: Bold;
// 800: Extra Bold (Ultra Bold);
// 900: Black (Heavy).

const fontFace = (
    family: string,
    woff2Href: string,
    woffHref: string,
    weight: number | string,
    style: "normal" | "italic" = "normal"
) =>`
  @font-face {
    font-family: '${family}';
    src: url(${woff2Href}) format('woff2'),
         url(${woffHref}) format('woff');
    font-weight: ${weight};
    font-style: ${style};
    font-display: swap;
  }
`;

const poppinsRegularWoff2 = new URL("../assets/fonts/Poppins-Regular.woff2", import.meta.url).href;
const poppinsRegularWoff  = new URL("../assets/fonts/Poppins-Regular.woff",  import.meta.url).href;

const josefinRegularWoff2   = new URL("../assets/fonts/JosefinSans-Regular.woff2",   import.meta.url).href;
const josefinRegularWoff    = new URL("../assets/fonts/JosefinSans-Regular.woff",    import.meta.url).href;
const josefinSemiBoldWoff2  = new URL("../assets/fonts/JosefinSans-SemiBold.woff2",  import.meta.url).href;
const josefinSemiBoldWoff   = new URL("../assets/fonts/JosefinSans-SemiBold.woff",   import.meta.url).href;
const josefinBoldWoff2      = new URL("../assets/fonts/JosefinSans-Bold.woff2",      import.meta.url).href;
const josefinBoldWoff       = new URL("../assets/fonts/JosefinSans-Bold.woff",       import.meta.url).href;

export const GlobalFonts = createGlobalStyle`
    ${fontFace("Poppins",      poppinsRegularWoff2, poppinsRegularWoff, 400)}
    ${fontFace("Josefin Sans", josefinRegularWoff2, josefinRegularWoff, 400)}
    ${fontFace("Josefin Sans", josefinSemiBoldWoff2, josefinSemiBoldWoff, 600)}
    ${fontFace("Josefin Sans", josefinBoldWoff2, josefinBoldWoff, 700)}
`