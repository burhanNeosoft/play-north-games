import React, {useEffect, useState} from 'react';
import Head from 'next/head'
import Header from "../Header"
import Footer from "../Footer";

const MainLayout = ({ children }) => {

  return (
    <>
      <Head>
          <title>Play North</title>
      </Head>
      <Header/>  
      {children}
      <Footer/>           
   </>
  )
}

export default MainLayout