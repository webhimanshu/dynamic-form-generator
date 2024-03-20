import React from 'react'

const Input = ({label , value, onChange}) => {
  return (
   <> 
    <label>{label}</label>
    <input value={value} onChange={onChange} />
    </>
  )
}

export default Input