import React from 'react'

const Textarea = ({ label, value, onChange }) => {
  return (
    <>
     <label>{label}</label>
    <textarea value={value} onChange={onChange} />
    </>
  )
}

export default Textarea