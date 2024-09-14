import localFont from "next/font/local";
import {Outfit} from 'next/font/google'

export const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})

export const zodiak = localFont({
    src: [{
      path: "../../public/font/Zodiak-Variable.woff2",
      style: 'normal'
    }],
   
  variable: '--font-zodiak'
  });
  