import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata:Metadata = {
  title: 'Blog wala page',
  openGraph: {
    title: 'Blog wala page',
  },
}


export default function About() {
  // throw new Error("Not today!")  //error handling
  return (
    <>
    <h1 className='bg-green-300'>
      About
    </h1>
    <Link href={'/'}>Link to Home Page</Link>
    </>
    
  )
}
