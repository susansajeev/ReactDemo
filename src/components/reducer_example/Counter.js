import React, { useReducer } from 'react'
import reducer from './CounterReducer';

const Counter = () => {
    // 1️⃣ Initial state
    const initialState = { count: 0 };

    const [state, dispatch] = useReducer(reducer, initialState)

    return (

        <div style={{
            alignItems: 'center',
            height: '100vh',
            margin: '40px'
        }}>
            <h2>Count: {state.count}</h2>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <br></br>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <br></br>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>

    )
}

export default Counter