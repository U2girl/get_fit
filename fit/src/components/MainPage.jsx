import React from 'react'
import HeaderPage from './HeaderPage'
// import HeroPage from './HeroPage'

const MainPage = () => {
  return (
    <React.Fragment>
    <main>
      <div className="bg-white pb-20 shadow-lg md:w-2/3 md:mx-auto">
        <HeaderPage/>
        {/* <HeroPage/> */}
      </div>
    </main>
  </React.Fragment>
  )
}

export default MainPage