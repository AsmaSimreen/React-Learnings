//Accept the step as the action

import * as React from 'react'

function countReducer(count, step) {
  return count + step
}

function Counter({ initialCount = 0, step = 1 }) {
  const [count, changeCount] = React.useReducer(countReducer, initialCount);
  const increment = () => changeCount(step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App

