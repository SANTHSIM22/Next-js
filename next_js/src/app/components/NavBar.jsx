import React from 'react'
import Link from 'next/link'
const NavBar = () => {
  return (
    <>
     <div >
        <ul className="flex space-x-4">
            <Link href="/"><li>Home</li></Link>;
            <Link href="/"><li>About</li></Link>
            <Link href="/"><li>Links</li></Link>
            <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><li>Oops</li></Link>
        </ul>
     </div>
    </>
  )
}

export default NavBar