import { useState } from 'react'
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import { NextUIProvider } from '@nextui-org/system'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NextUIProvider>
        <div className=' max-w-[80rem] mx-auto'>
          <Navbar />
          <Grid />
        </div>
      </NextUIProvider>
    </>
  )
}

export default App
