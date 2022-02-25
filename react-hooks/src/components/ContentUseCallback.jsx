import { memo } from "react";

function ContentUseCallback({onIncrease}){
    console.log('Re-render ContentuseCallback!')
    return(
        <div>
            <h1>ContentUseCallback</h1>
            <button onClick={onIncrease}>Increase</button>
        </div>
    )
}

export default memo(ContentUseCallback)