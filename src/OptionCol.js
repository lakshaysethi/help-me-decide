import React from 'react'
import './OptionCol.css'
function OptionCol({index, option}) {
  return (
    <div key={index} className='option-col'>
        <div className='option-text'>{option}</div>
    </div>

  )
}

export default OptionCol