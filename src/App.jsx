import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : 'Krish',
    age : 34
  }

  let newArr = [1,3,2]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
      TailWind css
    </h1>
    <Card username="chai or code" btnText="click me" />
    <Card username="Hitesh" />
    </>
  )
}

export default App
