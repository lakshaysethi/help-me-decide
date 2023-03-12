import './App.css';
import { useState } from 'react';
import OptionCol from './OptionCol';

function App() {
  const [options, setOptions] = useState([]);
  const [ optionText, setOptionText ] = useState('');
  const addOption = () => {
    setOptions([...options, optionText]);
    setOptionText('');
  }
  const handleOptionTextChange = (event) => {
    setOptionText(event.target.value);
    if (event.key === 'Enter') {
      addOption();
    }
  }

  return (
    <div className="App">
      <h1>Decision helper</h1>
      <p>Please enter the title of the decision</p>
      <input className='title-input' type="text" placeholder='Which house should I rent? / Which candidate should I hire?' />
      <p>Please enter the options</p>
      <input className='option-input' type="text" placeholder='Option A' value={optionText} onKeyDown={handleOptionTextChange} onChange={handleOptionTextChange} />
      <button onClick={addOption} className='add-option-button'>Add option</button>
      <div className='options'>
        {options.map((option, index) => <OptionCol key={index} option={option} />)}
      </div>
    </div>
  );
}

export default App;
