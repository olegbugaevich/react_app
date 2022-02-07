import { useState } from "react";
import MyButton from "./components/MyButton";
import ToggleButton from "./components/toggleButton";

const App = () => {
  const [buttonText, setButtonText] = useState('Click me please!');
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <MyButton changeText={setButtonText}>{buttonText}</MyButton>
      <ToggleButton
        toggle={toggle}
        setToggle={setToggle}
        >
          {toggle ? 'One' : 'Two'} 
        </ToggleButton>
    </div>
  );
}
export default App;
