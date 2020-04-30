import React from 'react';
import './App.css';

import { Exercise } from './components/exercise/exercise.component'
import { ALL_EXERCISES } from './model/exercises/all-exercises'

class App extends React.Component {

  constructor() {
    super()
    this.state = 
    {

    }
  }

  render() {
    return (
      <div>
        {ALL_EXERCISES.ch1.map((ex, idx) => <Exercise key={idx} script={ex.script}/>)}
      </div>
    )
  }

}

export default App;
