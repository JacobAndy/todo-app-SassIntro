import React, { Component } from "react";
import "../input.css";

class Daily extends Component {
  state = {
    inputTask: "",
    tasks: []
  };
  render() {
    let { inputTask, tasks } = this.state;
    let { name } = this.props;
    let mapTasks = tasks.map((e, i) => (
      <p key={i}>
        {i + 1}.) {e}
      </p>
    ));
    return (
      <div className="holder inner">
        <input type="range" />
        <h2 className="color">{name}</h2>
        <input
          value={inputTask}
          placeholder={`Add Task for ${name}`}
          onChange={e => this.setState({ inputTask: e.target.value })}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            let pushed = tasks.slice();
            pushed.push(inputTask);
            console.log(pushed);
            this.setState({ tasks: pushed, inputTask: "" });
          }}
        >
          Add To Task
        </button>
        <button disabled className="btn">
          disabled
        </button>
        {mapTasks}
      </div>
    );
  }
}
export default Daily;
