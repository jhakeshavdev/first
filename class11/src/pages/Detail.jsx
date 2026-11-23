import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const params = useParams()
  return (
    <div >
       <h1 className='absolute top-1/2 left-1/2 -translate-1/2 text-3xl underline font-bold' > {params.courseid} courses detail......</h1>
    </div>
    
  )
}

export default Detail