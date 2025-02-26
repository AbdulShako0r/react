
import './App.css'
import Login from './Components/Login'
import Profile from './Components/profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Hello World </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App