import { useState } from 'react'
import freeCodeCamp from './assets/img/freecodecamp.svg'
import Button from './components/button'
import Count from './components/count'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const manageClick = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div className="container__logo">
        <img src={freeCodeCamp} alt="logo freeCodeCamp" className="container__img" />
      </div>

      <div className='container__main'>
        <Count numClick={count} />
        <Button
          text='click'
          buttonClick={true}
          manageClick={manageClick} />

        <Button
          text='reset'
          buttonClick={false}
          manageClick={resetCount} />
      </div>
    </div>
  );
}

export default App
