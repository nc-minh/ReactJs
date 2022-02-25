import { useState, useEffect, useLayoutEffect } from 'react'
// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật lại DOM (mutated)
// 3. Gọi cleanup nếu deps thay đổi (sync)
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lại UI

function UseLayoutEffect(){
    const [count, setCount] = useState(0)

    useLayoutEffect(() => {
        if(count > 3){
            setCount(0)
        }
    }, [count])

    const handleRun = () => {
        setCount(count+1)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>++1</button>
        </div>
    )
}
export default UseLayoutEffect