import React, { useState } from 'react'
import Washroom from './components/washroom'

const App = () => {
  const [gender, setGender] = useState('Male')

  function ChangeGender() {
    if (gender == 'Male') {
      setGender('Female')
    }
    else if (gender == 'Female') {
      setGender('Other')
    }
    else {
      setGender('Male')
    }
  }

  return (
    <div className='p-8'>
      <h1 className='text-4xl m-4 text-emerald-600'>your gender is ~{gender}</h1>
      <button onClick={ChangeGender} className='m-3 h-10 w-30 rounded bg-amber-200'>Change gender</button>
      <Washroom user={gender} />
    </div>
  )
}

export default App