import './App.css';
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
  const [criteria, setCriteria] = useState([]);
  const [ criteriaText, setCriteriaText ] = useState('');

  const addCriteria = () => {
    setCriteria([...criteria, criteriaText]);
    setCriteriaText('');
  }
  const handlecriteriaTextChange = (event) => {
    setCriteriaText(event.target.value);
    if (event.key === 'Enter') {
      addCriteria();
    }
  }


  return (
    <Container className="App">
      <h1>Decision helper</h1>
      <p>Please enter the title of the decision</p>
      <input className='title-input' type="text" placeholder='Which house should I rent? / Which candidate should I hire?' />
      <p>Please enter the options</p>
      <input className='option-input' type="text" placeholder='Option A' value={optionText} onKeyDown={handleOptionTextChange} onChange={handleOptionTextChange} />
      <button onClick={addOption} className='add-option-button'>Add option</button>
      <p> Please enter a few criteria</p>
      <input className='criteria-input' type="text" placeholder='Criteria 1' value={criteriaText} onKeyDown={handlecriteriaTextChange} onChange={handlecriteriaTextChange} />
      <button className='add-criteria-button'>Add criteria</button>
      <br />
        <Row>
          <Col className='criteria'>
            <Row className='criteria-row'>Criteria</Row>
            {criteria.map((criterion, index) => <Row key={index} className='criterion'><input type="text" value={criterion} /></Row>)}
          </Col>
          {options.map((option, index) => {
            return (
              <Col key={index} >
                 <Row>{ option} </Row>
                  {criteria.map((criterion, index) => <Row key={index} className='points'><input type="text" /></Row>)}
              </Col>
            )
          })}
        </Row>

    </Container>
  );
}

export default App;
