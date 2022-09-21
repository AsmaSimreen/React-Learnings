// useState: greeting

import * as React from 'react'

function Greeting() {
  const [name, setName] = React.useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App

// Extra Credit Solution below
// Pass props as initialName
/*
function Greeting({ initialName = '' }) {
    const [name, setName] = React.useState(initialName);

    function handleChange(event) {
        setName(event.target.value);
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Name: </label>
                <input value={name} onChange={handleChange} id="name" />
            </form>
            {name ? <strong>Hello {name}</strong> : 'Please type your name'}
        </div>
    )
}

function App() {
    return <Greeting initialName="Asma" />
}

export default App
*/