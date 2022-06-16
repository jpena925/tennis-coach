import React from 'react'

function NavBar() {
    return (
        <div className='mt-2 py-4 shadow-md relative'>
            <div className="flex justify-end px-5 space-x-4">
                   <button className="border-b-2 hover:font-bold uppercase" >Home</button>
                   <button className="border-b-2 hover:font-bold uppercase" >About Me</button>
                   <button className="border-b-2 hover:font-bold uppercase" >Classes and Lessons</button>
                   <button className="border-b-2 hover:font-bold uppercase" >Pricing</button> 
            </div>
        </div>
      )
}

export default NavBar