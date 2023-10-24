import React from 'react'

type Props = {}

function Header({}: Props) {
  return (
      <div className='border-b border-black flex justify-between'>
          <div className='text-4xl'>BLOG</div>
          <button className='text-white bg-slate-600 px-4 py-4 '>Sign In</button>
    </div>
  )
}

export default Header