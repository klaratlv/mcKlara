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
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          {this.state.tasks.map(task => (
            <TaskItem key={task.name} {...task}>
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
