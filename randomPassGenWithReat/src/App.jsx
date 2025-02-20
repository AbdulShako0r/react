import './index.css'; 
import './App.css'
import { useState, useCallback } from 'react';

function App() {
const [length, setLength]=useState(8);
const [allowedNumber, SetallowedNumber]=useState(false);
const [charAllowd, setcharAllowed]=useState(false);
const [password, setpassword]=useState("");
const passwordGenerator= useCallback( ()=>{
  let pass="";
  let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
if(allowedNumber) str +="0123456789";
if(charAllowd) str +="~!@#$%^&*(){}[]`?/><.,+=";
for (let i = 0; i < array.length; i++) {
let char= Math.floor(Math.random()* str.length+1) 
pass=char.chatAt(char) 
}
setpassword(pass)
} 
, [length, allowedNumber, charAllowd , password , setpassword]);
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>Test</div>
    </>
  )
}

export default App
