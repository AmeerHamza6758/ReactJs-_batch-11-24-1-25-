import React from 'react'
import CompC from './CompC'

function CompB({name}) {
  return (
    <>
    <div style={{backgroundColor:'green'}}>hello I'm Copo B and my name is {name}</div>
    <CompC name={name}/>
    </>

  )
}

export default CompB