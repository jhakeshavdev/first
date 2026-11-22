import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [usename, setusename] = useState('')
  const [num, setnum] = useState(0)

  const getData =async ()=>{
    const response = await axios.get('https://randomuser.me/api/')
    setusename (response.data.results[0].name.first)

  }

  useEffect (()=>{
    getData()
  },[num])

  return (
    <div>
      {usename}

      <h1>{num}</h1>
      <button onClick={()=>{
        setnum(num+1)
}}>Click Here</button>
    </div>
  )
}

export default App


// useEffect :- useEffect use hota hai kisi bhi kaam ko side stack par chalane ke liye