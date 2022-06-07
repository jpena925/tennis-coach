import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='mt-2 py-4 shadow-md relative space-x-8 px-5'>
        <button>Home</button>
        <button>About Me</button>
        <button>Classes</button>
        <button>Pricing</button>
    </div>
  )
}

export default Nav