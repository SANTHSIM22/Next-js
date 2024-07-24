import React from 'react'
import Button from './components/Button'

const page = () => {
  return (
    <>
   <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><h1 className="text-3xl text-center hover:text-blue-800 cursor-pointer p-5 bg-orange-600 ">SANTHSIM VIRILE DSOUZA</h1></a>
    <p>brief description: I am lazy but I like coding</p>
    <Button/>
    <p> Learnings: 
      <br></br> 
     To initialize the next-js in vs code using cli, running the server  
     <br></br>
      To use File based routing , Dynamic routing for multiple users , rafce
      <br></br>
      To use Tailwind Css and Fragment rather using div tags since it should have only one parent element 
      </p>
    </>
  )
}

export default page