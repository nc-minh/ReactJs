import { useRef, useState, useEffect, useLayoutEffect } from 'react'
// useRef lưu các giá trị qua một tham chiếu bên ngoài function component
function UseRef(){
    const [count, setCount] = useState(60)

    const timerId = useRef()
    const preCount = useRef()

    useEffect(() => {
        preCount.current = count
    })

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(preCount => preCount - 1)
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timerId.current)
    }

    console.log(count, preCount.current);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default UseRef