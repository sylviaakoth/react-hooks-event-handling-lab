// Code EyesOnMe Component Here

import React from 'react'

function EyesOnMe() {

  function handleFocus(event) {
    console.log(event.target.value = "Good!")
  }

function handleBlur (event) {
  console.log(event.target.value= "Hey! Eyes on me!")
}

  return (
    <div>EyesOnMe
      <button onBlur={handleBlur} onFocus = {handleFocus} >Eyes on me!</button>
    </div>
  )
}

export default EyesOnMe

