import React from 'react'
import "../products/styles.scss"

export const Add = ( {onClick }) => {
  return (
    <>
      <button className= 'button-form' onClick={ onClick }>Add Product </button>
    </>
  )
}

