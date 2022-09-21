// Extra Credit Solution 1

import * as React from 'react'

function UsernameForm({ onSubmitUsername }) {
   const userNameInputRef = React.useRef()
    function handleSubmit(event) {
    event.preventDefault();
    //const value = event.target.elements.usernameInput.value
    const value = userNameInputRef.current.value
    onSubmitUsername(value);
  }
  return (
    <form onSubmit={{ handleSubmit }}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input ref={userNameInputRef} id="usernameInput" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
