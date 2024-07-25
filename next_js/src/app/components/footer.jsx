import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '/public/logo.png'
const Footer = () => {
  return (
    <>

     <div className="fixed flex  bottom-0 w-full bg-gray-800 text-white" >
     <Image
       src={logo}
       alt="logo"
       width={100}
       height={100}
       className="h-20 mr-10 bg-white">
    
    </Image>
        <ul className="flex mt-6 space-x-4">
            <Link href="/"><li>place</li></Link>
            <Link href="/contactme"><li>contact me?</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><li>Login</li></Link>
        </ul>
     </div>
    </>
  )
}

export default Footer