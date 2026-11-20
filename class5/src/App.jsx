import React from 'react'
import { useState } from "react"

const App = () => {

  const [title, setTitle] = useState('')
  
  const [allUser, setAllUser] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const  newAllUsers = [...allUser]
    newAllUsers.push(title)
    console.log(newAllUsers)

    setAllUser(newAllUsers)

    setTitle("")
  }


  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input className=' bg-amber-600 m-4 p-5'
          type="text"
          placeholder='Enter your name'
          value={title}
          required
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <button className='bg-blue-400 pl-2 pr-2 pt-1 pb-1 rounded'>Submit</button>
      </form>

      {allUser.map((elem,idx)=>{
        return <h4 key={idx}>{elem}</h4>
      })}
    </div>
  )
}

export default App