import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'
import "./style.scss"

export const Add = ( {onClick }) => {
  return (
    <>
      <button className= 'button-form' onClick={ onClick }><FontAwesomeIcon className="addIcon" icon={ faSquarePlus } />  </button>
    </>
  )
}
