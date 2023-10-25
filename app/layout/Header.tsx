"use client"
import React from 'react'
import Link from 'next/link'
import { Button as AuthButton } from "../auth/Button"
import { SessionProvider} from 'next-auth/react'

type Props = {}

function Header({}: Props) {
    return (
      <SessionProvider>
      <div className='border-b border-black flex justify-between'>
          <Link href='/' className='text-4xl'>CodeBlog</Link>
                {/* <button className='text-white bg-slate-600 px-4 py-4 '>Sign In</button> */}
                <AuthButton/>
            </div>
            </SessionProvider>
  )
}

export default Header