import { useState, useCallback } from "react";
import ContentUseCallback from './ContentUseCallback'

function UseCallback(){
    const [count, setCount] = useState(0)

    const handleIncrease = useCallback(() => {
        setCount(preCount => preCount + 1)
    }, [])
    
    console.log('Re-render useCallback!')
    return(
        <div>
            <h1>use callback</h1>
            <h2>{count}</h2>
            <ContentUseCallback onIncrease={handleIncrease}/>
        </div>
    )
}

export default UseCallback