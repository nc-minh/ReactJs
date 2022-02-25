import { useState, memo } from "react";
import ContentMemo from './ContentMemo'
// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback()

// Hooks
// HOC
// Render props
function Memo(){
    const [count, setCount] = useState(0)

    console.log('Memo re-render')
    const Increase = () => {
        setCount(preCount => preCount + 1)
    }
    return(
        <div>
            <h1>Memo</h1>
            <h2>
                <i>{count}</i>
            </h2>
            <button onClick={Increase}>Increase</button>
            <ContentMemo/>
        </div>
    )
}

export default Memo