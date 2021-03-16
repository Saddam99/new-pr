import React from 'react';

function Increase(props) {
    function increase() {
        props.setCounter(props.counter + 2)

    }
    return (
        <div className="increase buttonform" onClick={increase}>
            Увеличить
        </div>
    );
}

export default Increase;