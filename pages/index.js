import React from 'react'
import Projects from 'components/Projects'
import Hero from '../components/Hero'
import {getTable} from 'lib/airtable'
import {Context} from 'config/Context'

function Home({data}) {

  return (
  <Context.Provider value={{data}}>
    <Hero />
    <div className="container">
      <div className="divider"></div>
    </div>
    <Projects  />
    <div className="container">
      <div className="divider"></div>
    </div>
  </Context.Provider>
  )
}

export async function getStaticProps(){
  const data = await getTable('Projects');
  return {
      props: {
          data,
      },
  }
}


export default Home