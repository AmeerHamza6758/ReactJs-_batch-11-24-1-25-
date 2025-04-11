import React, { useContext } from 'react'
import { MyContext } from '../services/MyContext'

function Home() {
  const { name, email } = useContext(MyContext)
  return (
    <div>This is HOME page {name} and email is:{email}</div>
  )
}

export default Home