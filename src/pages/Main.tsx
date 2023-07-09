import React, { FC } from 'react';
import AboutMe from '../components/AboutMe';
import MyTechStack from '../components/MyTechStack'
import MyProjects from '../components/MyProjects';
import Industries from '../components/Industries';

type Props = {
  handleBackClick(className: string): void
}

const Main:FC<Props> = ({handleBackClick}) => {
  return (
    <>
      <main id='home' className='App' style={{ height: 'fit-content', transition: '1s ease-in-out' }}>
        <AboutMe />
        <hr className='w-100' style={{zIndex:111, boxShadow: '0 1px 2px -2px var(--light)', backgroundColor:'white'}} />
        <MyTechStack />
        <Industries />
        <MyProjects />
      </main>
    </>
  )
}

export default Main