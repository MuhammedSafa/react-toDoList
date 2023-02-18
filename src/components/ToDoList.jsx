import React, { useState } from "react";


function ToDoList(props) {

    const [isDone, setIsDone] = useState(false);
    const [countClick, setCoutnClick] = useState(0);


    return <div onClick={() => {

        setIsDone(!isDone);

        setCoutnClick(countClick + 1);
        if (countClick === 1) {
            setCoutnClick(0)
            return props.onChecked(props.id);
        } else {
            return;
        }

    }}>
        <li style={{ userSelect: "none", textDecoration: isDone ? "line-through" : "none" }} >{props.item}</li>
    </div>
}


export default ToDoList;