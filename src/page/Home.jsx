import React from 'react'
import Bigcards from '../components/Bigcards'
import Smallcards from '../components/Smallcards'



const Home = () => {
  return (
    <>
      <div className="home-body">
        <div className="bigcards">
          <Bigcards />
        </div>
        <div className="Smallcards">
          <Smallcards />
        </div>
      </div>

    </>
  )
}

export default Home