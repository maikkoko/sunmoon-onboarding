import React from "react";

const ListLogs = ({ logs, deleteLog }) => {
  return(
    <ul>
      {
        logs &&
          logs.length > 0 ?
          (
            logs.map(log => {
              let selectedDateTime = new Date(log.timestamp);
              let formattedDate = selectedDateTime.getFullYear() + '-' + (selectedDateTime.getMonth() + 1) + '-' + selectedDateTime.getDate() + ' ' + selectedDateTime.getHours() + ':' + selectedDateTime.getMinutes() + ':' + selectedDateTime.getSeconds();
              return(
                <li key={log._id} onClick={() => deleteLog(log._id)}>{log.log_type} || {formattedDate}</li>
              );
            })
          )
          :
          (
            <li>No log(s) left</li>
          )
      }
    </ul>
  );
}

export default ListLogs;