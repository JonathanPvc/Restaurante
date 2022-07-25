import React from 'react'
import "../products/styles.scss"

import "./styles.scss";

export const Add = ( {onClick }) => {
  return (
    <>
      <button className= 'button-form' onClick={ onClick }>Add Product </button>
    </>
  )
}

