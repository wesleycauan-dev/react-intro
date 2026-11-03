import "./App.css";

import { useState } from "react";
import Header from "../Header.tsx";
function App() {
  const [contador, setContador] = useState<number>(0);

  function btnClick() {
    setContador(contador + 1);
  }
  return (
    <>
      <Header />
      <p>welcome to the React course!</p>
      <button onClick={btnClick}>Click me!</button>
      <p>{contador} clicks</p>
    </>
  );
}

export default App;
