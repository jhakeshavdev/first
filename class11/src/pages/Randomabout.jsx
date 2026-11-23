import React from 'react'
import { useParams } from 'react-router-dom'

const Randomabout = () => {
    const params = useParams()

  return (
    <div >
       <h1 className='absolute top-1/2 left-1/2 -translate-1/2 text-3xl underline font-bold' > {params.id} about pages</h1>
    </div>
  )
}

export default Randomabout