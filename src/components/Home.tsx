import React from 'react'
import {Link} from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className='text-center mt-20'>
      <p>Home</p>
      <p>click log in button to visite log in page</p>
      <Link to="/login"><button className='p-2 bg-black text-white rounded-lg'>Log In</button></Link>
    </div>
  )
}

export default Home