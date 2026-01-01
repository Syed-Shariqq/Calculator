import React from 'react'
import Calculator from './Components/Calculator'

const App = () => {
  return (
    <div className='text-white flex items-center justify-center bg-black w-screen min-h-screen'>
      <div className='background h-screen w-full flex items-center justify-center'>
        <Calculator />
      </div>
    </div>
  )
}

export default App