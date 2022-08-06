// Overview.js

import React from "react";

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task, lineNumber) => {
        return (<li key={task.id}>{lineNumber}{task.text}</li>
        );
      })}
    </ul>
  );
};

export default Overview;