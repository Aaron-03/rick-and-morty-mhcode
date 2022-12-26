import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Header from './Header';


const Layout = ({ children }) => {

  

  return (
    <div>
      <Head>
        <title>Rick & Morty | MHCode</title>
        <meta name="description" content="This website use Rick & Morty API to list all items about the series. This project is for MHCode's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
        <main className='main'>
          { children }
        </main>
      <Footer />
    </div>
  )
}

export default Layout;