import React, { Component } from 'react';
import TaskItem from './components/TaskItem'
import './App.css';
import { sendAction } from './messanger';

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
          name: 'Delivery',
          icon: 'trucking.png'
        },
        {
          name: 'Fika',
          icon: 'tea-cup.png'
        },
        {
          name: 'Basketball',
          icon: 'basketball.png'
        },
        {
          name: 'Audio',
          icon: 'music-player.png'
        },
        {
          name: 'LED',
          icon: 'display.png'
        },
        {
          name: 'Interview interrupt',
          icon: 'interview.png'
        }
      ]
    }
  }
  api(task, args) {
    sendAction(98, 0, task.mission, ...args)
      .then(res => {
        console.log(res)
      })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="klara.png" className="App-logo" alt="logo" />
          <h2>Welcome to mcKlara!</h2>
          <h3>The ultimate management console to Klara</h3>
        </div>
        <div className="App-intro">
          {this.state.tasks.map(task => (
            <TaskItem key={task.name} {...task} ok={(args) => this.api(task, args)}>
              {task.form}
            </TaskItem>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
