import React from 'react'
import type { NextPage } from 'next'
import Home from "../src/components/Home"

export async function getServerSideProps() {
  const res = await fetch('https://casino.api.stg.kansino.nl/v1/kansino/en/config')
  const config = await res.json();
  
  return { props: { config } }
}

const HomeIndex = (props) => {
  const {config} = props
  return (
    <React.Suspense fallback="loading....">
        <Home config={config}/>
    </React.Suspense>
  )
}

export default HomeIndex
