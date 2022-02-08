import { useState } from "react";
import MyButton from "./components/MyButton";
import ToggleButton from "./components/toggleButton";

const App = () => {
  const [buttonText, setButtonText] = useState('Click me please!');
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <MyButton changeText={setButtonText}>{buttonText}</MyButton>
      <ToggleButton
        toggle={toggle}
        setToggle={setToggle}
        >
          {toggle ? 'One' : 'Two'} 
        </ToggleButton>
      <h2>{count}</h2>
      <button className="plus" onClick={() => setCount(count + 1)}>Plus</button>
      <button className="minus" onClick={() => setCount(count - 1)}
                                disabled={count === 0}>Minus</button>
      <button className="reset" onClick={() => setCount(0)}
                                disabled={count === 0}>Reset</button>
    </div>
  );
}
export default App;
