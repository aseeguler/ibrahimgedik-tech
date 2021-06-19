import React from 'react'
import Hero from '../components/Hero'
import Musics from 'components/Musics'
import {getTable} from 'lib/airtable'
import {Context} from 'config/Context'

function Home({data}) {
  return (
  <Context.Provider value={{data}}>
    <Hero />
    <div className="container">
      <div className="divider"></div>
    </div>
    <Musics />
    <div className="container">
      <div className="divider"></div>
    </div>
    <div>

    </div>
  </Context.Provider>
  )
}

export async function getStaticProps(){
  const data = await getTable('Musics');
  return {
      props: {
          data,
      },
      revalidate: 600,
  }
}


export default Home