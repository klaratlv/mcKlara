import React, { Component } from 'react';
import logo from './logo.svg';
import TaskItem from './components/TaskItem'
import './App.css';
import messenger from './messanger';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          name: 'Dance',
          icon: 'ballet.png',
          mission: 4,
          form: ["Duration", "Rhythm"]
        },
        {
          name: 'Delivery'
        },
        {
          name: 'Fika'
        }
      ]
    }
  }
  api(task, args) {
    messenger(98, 0, task.mission, ...args)
      .then(res => {
        console.log(res)
      })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to mcKlara!</h2>
          <h3>The ultimate management console to Klara</h3>
        </div>
        <div className="App-intro">
          {this.state.tasks.map(task => (
            <TaskItem key={task.name} {...task} ok={(args) => this.api(task, args)}>
              {task.form}
            </TaskItem>
          ))}
        <button onClick={() => messenger(98,0,7,9,3)}>Click</button>
        </div>
      </div>
    );
  }
}

export default App;
