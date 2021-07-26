import React, {useReducer, useState} from 'react';

function reducer(state, action){
    switch(action.type){
        case 'set': 
            if( !action.incrementBy){
                return{ counter:state.counter, value : 1}
            }
            return{ counter:state.counter, value : action.incrementBy}
        case 'increment':
            return{ counter: state.counter + state.value, value: state.value }
        case 'decrement':
            return{ counter: state.counter - state.value, value: state.value}
    }
}
function App(){
    const initstate = {
        counter: 0,
        value: 1
    };

    const[state, dispatch] = useReducer(reducer, initstate)
    // const [counter, setCounter] = useState(0);
    // const [incrementBy, setIncrement] = useState(1);

   
    return(
        <div> 
            <input
                
                onChange={ (e) => dispatch({type: 'set', incrementBy: Number(e.target.value)})}/>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <span>{state.counter}</span>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </div>
    );
}

export default App;
