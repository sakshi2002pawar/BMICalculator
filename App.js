import React, { useMemo, useState } from "react";
import './App.css';

const App = () => {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70); 

  function onWeightChange(event) {
    setWeight(event.target.value);  // Corrected the typo here
  }

  function onHeightChange(event) {
    setHeight(event.target.value);  // This should update the height, not the weight
  }

  const output = useMemo(() => {
    const calculateHeight = height / 100;
    return (weight / (calculateHeight * calculateHeight)).toFixed(1);
  }, [weight, height]);

  return (  
    <main>
      <h1>BMI Calculator</h1>
      <div className='input-section'> {/* Fixed class name spacing */}
        <p className='slider-output'>Weight: {weight} kg</p>
        <input
          className='input-slider'
          type='range'
          step='1'
          min='40'
          max='200'
          value={weight}  // Add value to bind to state
          onChange={onWeightChange}
        />
        <p className='slider-output'>Height: {height} cm</p>
        <input
          className='input-slider'
          type='range'
          min='140'
          max='200'
          value={height}  // Add value to bind to state
          onChange={onHeightChange}
        />
      </div>
      <div className='output-section'>
        <p className='output'>BMI: {output}</p>
      </div>
    </main>
  );
}

export default App;

