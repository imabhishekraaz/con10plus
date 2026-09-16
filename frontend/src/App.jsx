import { useState } from 'react'
import Main from './pages/main/Main'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Main/>
   </>
  )
}

export default App
