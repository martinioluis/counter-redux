import React from 'react';
import  { connect } from "react-redux";

const mapStateToProps = state => ({
    result: state
});

const CounterContainer = ({ result, dispatch}) => {
    return(
        <div className="CounterContainer">
            <p>{result}</p>
            <button id="add" onClick={() => dispatch({ type: 'ADD'})}>+</button>
            <button id="add10" onClick={() => dispatch({ type: 'ADD10'})}>+10</button>
            <button id="remove" onClick={() => dispatch({ type: 'REMOVE'})}>-</button>
            <button id="remove10" onClick={() => dispatch({ type: 'REMOVE10'})}>-10</button>
            <button id="reset" onClick={() => dispatch({ type: 'RESET'})}>Reset</button>
        </div>
    )
}

export default connect(mapStateToProps)(CounterContainer);