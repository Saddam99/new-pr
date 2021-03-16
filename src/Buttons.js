import React from 'react';
import Increase from "./Increase";
import Reduce from "./Reduce";
import Reset from "./Reset";

function Buttons(props) {
    return(
        <div className="buttons">
            <Increase counter={props.counter} setCounter={props.setCounter} />
            <Reduce counter={props.counter} setCounter={props.setCounter} />
            <Reset counter={props.counter} setCounter={props.setCounter} />
        </div>
    );
}
export default Buttons;