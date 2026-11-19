import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)



  return (
    <div>
      <h1 className='text-5xl m-4'>{num}</h1>
      <button onClick={() => {
        setNum(num + 1)
      }} className='bg-red-300 p-2 m-3'>increase</button>
      <button onClick={() => {
        setNum(num - 1)
      }} className='bg-amber-300 p-2 mr-3'>Decrease</button>
      <button onClick={() => {
        setNum(num + 5)
      }} className='bg-amber-950 p-2'>Move by 5</button>
    </div>
  )
}

export default App