// Colocate state
/* 
Colocate state in React means that we need to keep our “states” 
as close as where relevant is possible and let’s maintain/keep that 
practice that if we don’t nee some “state” is a component anymore then 
let’s just colocate that state where it needs to be.
*/


import * as React from 'react'

function Name() {
    const [name, setName] = React.useState('');

    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input
                id="name"
                value={name}
                onChange={event => setName(event.target.value)}
            />
        </div>
    )
}

function FavoriteAnimal({ animal, onAnimalChange }) {
    return (
        <div>
            <label htmlFor="animal">Favorite Animal: </label>
            <input
                id="animal"
                value={animal}
                onChange={onAnimalChange}
            />

        </div>
    )
}

function Display({ animal }) {
    return <div>{`Your favorite animal is: ${animal}!`}</div>
}


function App() {
    const [animal, setAnimal] = React.useState('')

    return (
        <form>
            <Name />
            <FavoriteAnimal
                animal={animal}
                onAnimalChange={event => setAnimal(event.target.value)} />
            <Display animal={animal} />
        </form>
    )
}

export default App
