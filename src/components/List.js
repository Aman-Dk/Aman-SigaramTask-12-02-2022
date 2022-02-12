import React from 'react'
import '../Styles.css'

export default function List(props) {

    const sendId = () =>{
        props.getId(props.id)
    }

  return (

        <div className='col-3' style={{background:`${props.bg}` }} onClick={sendId}>
            {/* {props.id} */}
        </div>
    
  )
}
