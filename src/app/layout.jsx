import '../styles/globals.css'
import NavBar from '../components/NavBar/index.jsx';
import Head from 'next/head';
import { DM_Sans } from 'next/font/google'


export const metadata = {
  title: "Julian Bischoff",
};

const fonts = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  weights: [400, 500 , 700],
 
})




const Layout = ({ children }) => {
  return (
    <>  
      <html lang="en" className={fonts.className}>
        <Head>
          <title>{metadata.title}</title>
        </Head>
        <body>
          <NavBar />
          {children}
        </body>
      </html>
    </>
  );
}

export default Layout;
