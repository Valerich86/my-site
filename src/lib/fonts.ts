import localFont from "next/font/local";
import { Cormorant, Raleway, Martian_Mono, Manrope, Caveat, Mulish, Bebas_Neue, Bad_Script, Great_Vibes } from "next/font/google"; 
import { Cormorant_SC } from "next/font/google"; 
import { Montserrat_Alternates, Montserrat, Roboto, Open_Sans, Playfair_Display, Bitter, Oswald } from "next/font/google"; 

export const font_logo = localFont({
  src: "../../public/fonts/ClimateCrisis-Regular-VariableFont_YEAR.ttf"
});

// export const font_accent_bold = localFont({
//   src: "../../public/fonts/seenonim-v1.ttf"
// });


export const font_accent = Mulish({
  weight: "700",
})

export const font_default = Manrope({
  weight: "400",
})
