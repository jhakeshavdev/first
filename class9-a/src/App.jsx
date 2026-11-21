import React,{useState}from 'react'
import axios from 'axios'
import User from './components/User'
import { useEffect } from 'react'

const App = () => {

  const [allData, setallData] = useState([])

  const getData = async ()=>{

    const response = await axios.get('https://jsonplaceholder.typicode.com/users')

    console.log(response.data);
    
    setallData(response.data)

  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
      {/* <button onClick={getData} className='bg-emerald-500 p-2 m-4 rounded active:scale-95'>Get data</button> */}

      <div className='flex flex-wrap'>
        {allData.map((elem,idx)=>{
        return <div key={idx}>
          <User elem={elem} />
        </div>
      })}
      </div>
    </div>
  )
}

export default App