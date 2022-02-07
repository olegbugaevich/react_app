import React from "react";

const MyButton = ({children, changeText}) => {
    return <button onClick={() => changeText('New text')}>{children}</button>
}

export default MyButton;
