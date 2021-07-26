import React, {useState} from 'react';

function App(){
    const [counter, setCounter] = useState(0);
    const [incrementBy, setIncrement] = useState(1);

    function increment(inc){
        setCounter(counter + inc);
    }

    return(
        <div> 
            <input value={incrementBy}
                onChange={e => setIncrement(Number(e.target.value))}/>
            <button onClick={() => increment(incrementBy)}>+</button>
            <span>{counter}</span>
            <button onClick={() => increment(-incrementBy)}>-</button>
        </div>
    );
}

export default App;
