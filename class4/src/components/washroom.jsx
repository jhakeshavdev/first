import React from 'react'

const washroom = (props) => {

let color='red'
if(props.user=='Male'){
    color='blue'
}
else if(props.user =='Female'){
    color='pink'
}
else{
    color='yellow'
}

            
    
  return (
    <div style={{background:color}} className=' bg-red-500 w-60 h-50 flex items-center justify-center '>
        {props.user} Washroom
    </div>
  )
}

export default washroom