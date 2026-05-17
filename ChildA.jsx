//-------------------------------(28/04/2026)----------------------------------------------
//------------Usecallback Hooks------------------------------------------------------------

import React, {memo} from 'react'

const ChildA = (learn,count) => {
  console.log("Child Component all.....!!")
  return (
    <div>ChildA</div>
  )
}
export default memo(ChildA)
