import React,{useState}from 'react'

const App = () => {

  const [AllUsser, setAllUsser] = useState([])
  const [Name, setName] = useState('')
  const [Title, setTitle] = useState('')
  const [Email, setEmail] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const oldUser = [...AllUsser]
    oldUser.push({Name,Title, Email})

    console.log(oldUser);
    

    setAllUsser(oldUser)
    setName('')
    setTitle('')
    setEmail('')
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className='mt-5 ml-3 flex justify-center items-center gap-10'>
        <input
          className='bg-amber-50 border-2' type="text"
          placeholder='Enter name'
          required
          value={Name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <input
          className='bg-amber-50 border-2' type="text"
          placeholder='Enter phone number'
          value={Title}
          required
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />
        <input
          className='bg-amber-50 border-2' type="text"
          placeholder='Enter Email'
          required
          value={Email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
        />
        <button className='bg-blue-300  rounded  pl-2 pr-2 pt-1 pb-1'
        >Submit
        </button>
      </form>

      {AllUsser.map((elem,idx)=>{
        return <div className=' m-1 
        bg-black text-blue-500 p-3 rounded h-fit w-70 ' key={idx}>
          <h4 >{elem.Name}</h4>
          <p > {elem.Title}</p>
          <p >{elem.Email}</p>
          
        </div>
      })}

    </div>
  )
}

export default App