import React, { Component } from "react";

class Daily extends Component {
  state = {
    inputTask: "",
    tasks: []
  };
  render() {
    let { inputTask, tasks } = this.state;
    let { name } = this.props;
    let mapTasks = tasks.map((e, i) => <p key={i}>{e}</p>);
    return (
      <div>
        <h2>{name}</h2>
        <input
          placeholder={`Add Task for ${name}`}
          onChange={e => this.setState({ inputTask: e.target.value })}
        />
        <button
          onClick={() => {
            let pushed = tasks.slice();
            pushed.push(inputTask);
            console.log(pushed);
            this.setState({ tasks: pushed });
          }}
        >
          Add To Task
        </button>
        {mapTasks}
      </div>
    );
  }
}
export default Daily;
