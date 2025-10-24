
import { useState } from "react"

function App() {


  const [counter,SetCounter] = useState(10)

  const addValue = ()=> {
    if(counter < 20)
    SetCounter(counter+1)
  }

  const removeValue = () => {
    if(counter > 0)
    SetCounter(counter-1)
  }
  
  return (

   <>
      <h1>Counter mini project</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value </button>

      <button onClick={removeValue}> Remove Value  </button>
    </>

  )
}

export default App
