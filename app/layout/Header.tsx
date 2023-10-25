import React from 'react'
import Link from 'next/link'

type Props = {}

function Header({}: Props) {
  return (
      <div className='border-b border-black flex justify-between'>
          <Link href='/' className='text-4xl'>CodeBlog</Link>
          <button className='text-white bg-slate-600 px-4 py-4 '>Sign In</button>
    </div>
  )
}

export default Header