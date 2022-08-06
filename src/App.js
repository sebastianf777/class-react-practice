import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '',
        id: uniqid(),
        lineNumber: 1
      },
      tasks: [],
      
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
      lineNumber: this.state
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '', 
        id: uniqid(),
        lineNumber: this.setState(lineNumber => {
          return{
            count: lineNumber.count + 1
          }
        })

      },
    });
  };
  render() {
    const { task, tasks} = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="taskInput"
          />
          <button type="submit">
            Add Task
          </button>
         
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
  
}

export default App;