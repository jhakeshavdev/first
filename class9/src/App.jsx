import React,{useState} from 'react'
import axios from 'axios'

const App = () => {

  const [allData, setallData] = useState([])

  async function getData(){
    

     const response =await axios.get('https://jsonplaceholder.typicode.com/users')

     console.log(response.data)
     

     setallData(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>

      {allData.map((elem,idx)=>{
        return <h1 key={idx}>{elem.name} {idx+1}</h1>
      })}
    </div>
  )
}

export default App


// axios se jo bhi data aata hai hamesha promises ke form me aata hai 