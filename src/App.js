import './App.css';
import React, { useState, useRef} from 'react';
import List from './components/List.js';
import Details from './components/Details.js';


function App() {
  const [list, setList] = useState();
  const [id, setId] = useState();
  const ref = useRef();

  const handleClick = e => {
    ref.current = e.target.id;
    if (id !== ref.current) { setId(ref.current) };
  };
 
  return <div>
    <List list={list} setList={setList} handleClick={handleClick}/>
    {<Details id={id}/>}
  </div>
}

export default App;
