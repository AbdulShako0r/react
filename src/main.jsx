import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hello from './App.jsx'
import { jsx as _jsx } from 'react/jsx-runtime'



// const reactElement={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target: '_blank'
//     },
//     Children: 'Click me to Go on Google...'
// }
const anOtherUser="Abdul Shakoor"
const anotherElemnt=(
  <a href="https://google.com" target='_blank'> Visit Google</a>
)
const reactElement=React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'click me to vist google',
  anOtherUser

)
createRoot(document.getElementById('root')).render(
  // anotherElemnt
  // reactElement
  <StrictMode>
    <Hello />
  </StrictMode>,
)
