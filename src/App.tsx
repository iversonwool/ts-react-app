import React from 'react';
import './App.css';
import LoadingHOC from './components/LoadingHOC'

function App() {
  return (
    <div className="App">

      <LoadingHOC name='Lee Klaus' loading={false} />
    </div>
  );
}

export default App;
