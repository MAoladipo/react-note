import React, {useState, useEffect} from 'react'
//useState is use to make the ui reactive

export default function Counter() {
    const [count,setCount] = useState(0)

    // useEffect(()=>{
        
    //     alert("useeffect ran")
    // }, [])

    function changeValue(value){
        // this is the right way
        setCount(count + value)

        // this is the wrong way
        // count = count + value
    }
  return (
    <div>
        <button onClick={()=> changeValue(-1)}>-</button>
        <span className='text-red-500'>{count}</span>
        <button onClick={()=> changeValue(1)}>+</button>

        {
            count < 0 && (<span>Your counter is a negative</span>)
        }
        
    </div>
  )
}
