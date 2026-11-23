import React from 'react'
import { useParams } from 'react-router-dom'

const Anycourses = () => {
    const params = useParams()
  return (
<div >
       <h1 className='absolute top-1/2 left-1/2 -translate-1/2 text-3xl underline font-bold capitalize' > {params.courseid} Course Detail</h1>
    </div>
  )
}

export default Anycourses