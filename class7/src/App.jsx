import React from 'react'
import { useState } from 'react'

const App = () => {

  const [UserName, setUserName] = useState('')
  const [Userrole, setUserrole] = useState('')
  const [imageurl, setimageurl] = useState('')
  const [userDesc, setuserDesc] = useState('')

  const [Alluser, setAlluser] = useState([])

  const ManageDefault = (e) => {
    e.preventDefault()

    const oldUser = [...Alluser]
    oldUser.push({ UserName, Userrole, imageurl, userDesc })

    setAlluser(oldUser)

    setUserName('')
    setUserrole('')
    setimageurl('')
    setuserDesc('')
  }

  const DeleteHaandler = (idx) => {
    const copyUser = [...Alluser]
    copyUser.splice(idx, 1)

    setAlluser(copyUser)
  }

  return (
    <div onSubmit={(e) => {
      ManageDefault(e)
    }}
      className='h-screen bg-black text-white'>
      <form className='flex flex-wrap justify-center p-5 py-10' >
        <input
          value={UserName}
          onChange={(e) => {
            setUserName(e.target.value)
          }}

          className='text-xl font-semibold border-2 px-5 py-2 rounded m-2  w-[45%]'
          type="text"
          placeholder='Enter your name' />
        <input
          value={imageurl}
          onChange={(e) => {
            setimageurl(e.target.value)
          }}
          className='text-xl font-semibold border-2 px-5 py-2 rounded m-2  w-[45%]'
          type="text"
          placeholder='Image url' />
        <input
          value={Userrole}
          onChange={(e) => {
            setUserrole(e.target.value)
          }}
          className='text-xl font-semibold border-2 px-5 py-2 rounded m-2  w-[45%]'
          type="text"
          placeholder='Enter role' />
        <input
          value={userDesc}
          onChange={(e) => {
            setuserDesc(e.target.value)
          }}
          className='text-xl font-semibold border-2 px-5 py-2 rounded m-2  w-[45%]'
          type="text"
          placeholder='Enter Description' />
        <br />
        <button className='text-xl font-semibold cursor-pointer hover:bg-emerald-900 active:scale-95 px-5 py-2 bg-emerald-700 rounded m-2 w-[90%]'>Create User</button>
      </form>

      <div className='px-2 py-10 flex flex-wrap justify-center gap-2'>
        {Alluser.map((elem, idx) => {
          return <div key={idx} className=' w-[23vw] rounded-xl py-8 px-8 flex items-center text-center flex-col  bg-white text-black'>
            <img className='h-24 w-24 rounded-full object-cover object-center' src={elem.imageurl} alt="" />
            <h1 className='text-2xl mt-2 font-bold'>{elem.UserName}</h1>
            <h5 className='text-blue-500 text-lg font-semibold my-2'>{elem.Userrole}</h5>
            <p className='text-sm font-medium leading-tight'>{elem.userDesc}</p>
            <button onClick={() => {
              DeleteHaandler(idx)
            }} className='px-4 py-2 rounded text-xs cursor-pointer active:scale-95 bg-red-600 text-white font-semibold mt-3'>
              Remove
            </button>
          </div>
        })}
      </div>
    </div>
  )
}

export default App