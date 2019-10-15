import React from 'react'
import Hello from './Hello'
import Welcome from './Welcome'
import Byby from  './Byby'
function Box (){
  return(
    <div className='box'>
      <Hello></Hello>
      <Welcome></Welcome>
      <Byby></Byby>
    </div>
  )
}
export default Box