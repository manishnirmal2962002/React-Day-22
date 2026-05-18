
//===================================(28/04/2026)======================================================
//-----------------------------------UseCallback Function----------------------------------------------

import React, {useCallback, useState } from 'react'
import ChildA from './ChildA'


 const App = () => {
  const [add, setAdd] = useState (0)
  const [count,setCount] = useState(0)
let learn = useCallback(() =>{
  //code
},[count])
   return (
    <>
    <ChildA learn = {learn}count = {count}/>
    <h1>Addition: {add}</h1>
    <button onClick={()=>setAdd (add+1)}>Addition</button>

    <h2>count: {count}</h2>
    <button onClick={()=>setCount (count+2)}>Addition</button>
    </>
  )
}
export default App



