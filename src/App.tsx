import React from 'react';
import './App.css';
import LoadingHOC from './components/LoadingHOC'
import {connect} from 'react-redux'
import {increment, decrement,incrementAsync} from './redux/actions/count'
import {NavLink, useRoutes} from 'react-router-dom'
import routes from './router';
import {createPortal} from 'react-dom'

function App(props: any) {
  const element = useRoutes(routes)
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



      <div style={{border: '1px solid cyan'}}>
        <NavLink to="/home" >Home</NavLink>
        <NavLink to="/about" >About</NavLink>
      </div>


      {element}


      {createPortal(<div>aaaa</div>, document.body)}
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
