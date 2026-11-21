import React from 'react'

const User = (props) => {

    const clr1 =Math.floor(Math.random()*256)
    const clr2 =Math.floor(Math.random()*256)
    const clr3 =Math.floor(Math.random()*256)


  return (
    <div style={{backgroundColor:`rgb(${clr1},${clr2},${clr3})`}} className=' h-40 w-60 p-5 m-5 text-black'
    ><h4 className='text-3xl'>{props.elem.name}</h4>
    <p>{props.elem.website}</p>
    </div>
  )
}

export default User