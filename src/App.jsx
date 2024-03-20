import { useState } from 'react'
import './App.css'
import FormGenerator from './components/FormGenerator.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <FormGenerator/>
  )
}

export default App
