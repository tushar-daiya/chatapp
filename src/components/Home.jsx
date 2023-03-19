import React from 'react'
import Chat from './Chat'
import Sidebar from './Sidebar'

const Home = () => {
  return (
    <div className="container text-white h-screen flex m-auto justify-center items-center">
        <div className='flex w-full h-4/5 '>
            <Sidebar/>
            <Chat/>
        </div>

    </div>
  )
}

export default Home