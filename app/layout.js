import { PT_Serif } from 'next/font/google';
import "./globals.css";
import  Head from "./head"
import NavCom from "./components/NavCom";
import FotterCom from './components/FotterCom';


const ptSerif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head/>

      <body className={ptSerif.className} data-theme="dark">
        <NavCom />
        {children}
        <FotterCom/>
      </body>
    </html>
  );
}