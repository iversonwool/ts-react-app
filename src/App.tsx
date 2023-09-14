import React from 'react';
import './App.css';
import LoadingHOC from './components/LoadingHOC'
import {connect} from 'react-redux'
import {increment, decrement,incrementAsync} from './redux/actions/count'


function App(props: any) {
  console.log(props)
  function increment() {
    props.increment(1)
  }
  function decrement() {
    props.decrement(1)
  }
  function incrementAsync() {
    props.incrementAsync(1000)
  }
  return (
    <div className="App">

      <LoadingHOC name='Lee Klaus' loading={false} />

      <div>count is {props.count}</div>
      <button onClick={increment}>increment 1</button>&nbsp;&nbsp;
      <button onClick={decrement}>decrement 1</button>&nbsp;&nbsp;
      <button onClick={incrementAsync}>incrementAsync 1</button>


      <ul>
        {props.person.map((person: any, index: number) => {
          return <li key={index}>{person.name}</li>
        })}
      </ul>
    </div>
  );
}

export default connect((state)=> ({
  count: (state as any).count,
  person: (state as any).person
}), {
  increment,
  decrement,
  incrementAsync
})(App);
