import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { aFunction } from './app/features/add_elements/addElementSlice';

function App() {
  //1. State/Hook Area
  const [data,setData] = useState([]);
  let state = useSelector(store=>store);
  let dispatch = useDispatch();
  //2. Function Defination Are
  let getData = ()=>{
    let x = parseInt(prompt('Enter the value ')); // Type Cast
    //alert('okok '+ x);

    //setData([...data,x]);
    dispatch(aFunction(x));
  }

  //3. Return Statement
  return (
    <div className="App">
        <button onClick={(e)=>{ getData(); }}>Get Data</button>
        {console.log(state.rootReducer.value)}
        {
          state.rootReducer.value.length > 0 &&
          state.rootReducer.value.map((cv,idx,arr)=>{
            //console.log(cv);
            return <h1 key={idx}>{cv}</h1>
          })
        }
    </div>
  );
}

export default App;
