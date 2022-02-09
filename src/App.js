import { useState } from "react";
import MyButton from "./components/MyButton/MyButton";
import ToggleButton from "./components/MYToggleButton/toggleButton";
import UserList from "./components/UserList";
import {users} from "./users";
import UserAdd from "./components/UserAdd";

const App = () => {
  const [buttonText, setButtonText] = useState('Click me please!');
  const changeText = () => {
    setButtonText('New Text')
  };

  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1)
  }
  const dec = () => {
    setCount(count - 1)
  }
  return (
    <div className="App">
      {/* <MyButton action={changeText}>{buttonText}</MyButton>
      <ToggleButton
        toggle={toggle}
        setToggle={setToggle}
        >
          {toggle ? 'One' : 'Two'} 
        </ToggleButton>
      <h2>{count}</h2>
      <MyButton className="plus" action={inc}>Plus</MyButton>
      <button className="minus" onClick={dec}
                                disabled={count === 0}>Minus</button>
      <button className="reset" onClick={() => setCount(0)}
                                disabled={count === 0}>Reset</button> */}
    <UserList users={users}/>
    <UserAdd/>
    </div>
  );
}
export default App;
