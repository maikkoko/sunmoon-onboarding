import React, { Component } from "react";
import axios from "axios";

class Button extends Component {
  state = {
    log: "start"
  };

  addLog = () => {
    const action = {log_type: this.state.log};

    axios.post("/api/logs", action)
      .then(res => {
        if (res.data) {
          console.log(res.data);
          this.props.getLogs();
          this.setState({log: (this.state.log === "start") ? "stop" : "start"});
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    return(
      <div>
        <button onClick={this.addLog}>{this.state.log}</button>
      </div>
    );
  };
}

export default Button;