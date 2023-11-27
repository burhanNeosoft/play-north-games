import React from 'react'
import type { NextPage } from 'next'
import Home from "@/components/Home";

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/config`)
    const config = await res.json();
    return { props: { config } }
  } catch (error) {
    console.log("error", error);
  }
}

const HomeIndex = (props:any) => {
  const {config} = props
  return (
    <React.Suspense fallback="loading....">
        <Home config={config}/>
    </React.Suspense>
  )
}

export default HomeIndex