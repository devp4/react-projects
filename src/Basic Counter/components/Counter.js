import { useState } from 'react' 
import './Counter.css'

const Counter = () => {

    const [number, setNum] = useState(0)
    
    return (
        <div>
            <h1 className='counter'>{number}</h1>
            <button className='addbtn' onClick={() => setNum(number + 1)}>Add 1</button>
            <button className='resetbtn' onClick={() => setNum(0)}>Reset</button>
        </div>
    )
}

export default Counter