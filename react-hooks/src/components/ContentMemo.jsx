import { useState, memo } from "react";
// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback()

// Hooks
// HOC
// Render props
function ContentMemo(){
    console.log('Content memo re-render')
    return(
        <div>
            <h1>This is content memo!</h1>
        </div>
    )
}

export default memo(ContentMemo)