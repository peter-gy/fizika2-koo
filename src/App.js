import React from 'react';
import './App.css';

import { Exercise } from './components/exercise/exercise.component'
import { exercises } from './exercises'

class App extends React.Component {

  constructor() {
    super()
    this.state = 
    {

    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        {exercises.map(ex => <Exercise script={ex}/>)}
      </div>
    )
  }

}

export default App;
