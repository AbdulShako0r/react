import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [ counter, setCounter]=useState(15)
// let counter=5;
const addValue=()=>{  
 setCounter(counter=>Math.min(20,counter+1))
}
const removeValue=()=>{
  // counter=counter-1
 setCounter(counter => Math.max(0, counter - 1));
}
  return (
    <>
     <h1>Counter App in React</h1>
     <h2>Counter value: {counter}</h2>
     <button
     class=" px-4 py-2 bg-blue-500 text-white rounded-lg" 
     onClick={addValue}>Add Value</button>
     <button className="px-4 py-2 bg-blue-500 text-white rounded-lg"  onClick={removeValue} >Remove Value</button>
    </>
  )
}

export default App
