import React from 'react';

function Reduce( props) {
    function reduce() {
        props.setCounter(props.counter >= 3 ? props.counter -3 : 0 )

    }
    return (
        <div className="reduce" onClick={reduce}>
            Уменьшить
        </div>
    );
}

export default Reduce;