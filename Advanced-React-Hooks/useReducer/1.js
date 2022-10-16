import * as React from 'react'

/*
         ---------WITH useState----------
function Counter({ initialCount = 0, step = 1 }) {
    const [count, setCount] = React.useState(initialCount)
    const increment = () => setCount(count + step)
    return <button onClick={increment}>{count}</button>
  }
  
  function App() {
    return <Counter />
  }
  
  export default App
*/

function countReducer(state, newState) {
  return newState
}

function Counter({ initialCount = 0, step = 1 }) {
  const [count, setCount] = React.useReducer(countReducer, initialCount);
  const increment = () => setCount(count + step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
