import React from 'react';

function Reset(props) {
    function reset() {
        props.setCounter(0)

    }
    return (
        <div className="reset buttonform" onClick={reset}>
            Сбросить
        </div>
    );
}

export default Reset;