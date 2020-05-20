import React, { Component } from "react";
import axios from "axios";

import Button from "./Button";
import ListLogs from "./ListLogs";

class Log extends Component {
  state = {
    logs: []
  };

  componentDidMount() {
    this.getLogs();
  }

  getLogs = () => {
    axios.get("/api/logs")
      .then(res => {
        if (res.data) {
          console.log(res.data);
          this.setState({
            logs: res.data
          });
        }
      })
      .catch(err => console.log(err));
  }

  deleteLog = id => {
    axios.delete(`/api/logs/${id}`)
      .then(res => {
        if (res.data) {
          console.log(res.data);
          this.getLogs();
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    let { logs } = this.state;

    return(
      <div>
        <h1>Countdown Timer</h1>
        <Button getLogs={this.getLogs} />
        <ListLogs logs={logs} deleteLog={this.deleteLog} />
      </div>
    );
  }
}

export default Log;