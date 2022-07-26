import React from 'react'
import "../AddProduct/style.scss"

export const Add = ( {onClick }) => {
  return (
    <>
      <button className= 'button-form' onClick={ onClick }>Add  </button>
    </>
  )
}
