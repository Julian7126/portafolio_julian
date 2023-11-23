import React from 'react';
import NavBar from './NavBar/page';
import Head from 'next/head';

export const metadata = {
  title: "Julian Bischoff - HomePage",
};

const Layout = ({ children }) => {
  return (
    <>
      <html>
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
