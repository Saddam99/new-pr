import React from 'react';
import Number from "./Number";
import Buttons from "./Buttons";
import {useState} from "react";

function MainContent() {
    const [counter, setCounter] = useState(0)
    return (
        <div>
          <Number conter={counter} />
          <Buttons counter={counter} setCounter={setCounter} />
        </div>
    );
}

export default MainContent;