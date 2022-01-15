import { useState } from 'react' 

const Counter = () => {

    var [number, add1] = useState(0)
    
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => add1(number + 1)}>Add 1</button>
            <button onClick={() => add1(number = 0)}>Reset</button>
        </div>
    )
}

export default Counter