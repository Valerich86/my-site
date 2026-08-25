import localFont from "next/font/local";
import { Raleway, Manrope, Roboto, Mulish, Bebas_Neue, IBM_Plex_Sans, Poppins } from "next/font/google"; 

export const font_logo = localFont({
  src: "../../public/fonts/ClimateCrisis-Regular-VariableFont_YEAR.ttf"
});

// export const font_accent_bold = localFont({
//   src: "../../public/fonts/seenonim-v1.ttf"
// });


export const font_accent = Raleway({
  weight: "700",
})

export const font_link = Roboto({
  weight: "300",
})

export const font_default = Roboto({
  weight: "400",
})
