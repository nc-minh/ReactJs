import { useReducer } from "react";
// useState
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down(state - 1)
// useReducer
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down(state - 1)
// 3. Reducer
// 4. Dispatch


// Init state
const intiState = 0

// Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// Reducer
const reducer = (state, action) => {
    switch(action){
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('Invalid action!')
    }
}
function UseReducer(){

    const [count, dispatch] = useReducer(reducer, intiState)

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(UP_ACTION)}>UP</button>
            <button onClick={() => dispatch(DOWN_ACTION)}>DOWN</button>
        </div>
    )
}

export default UseReducer