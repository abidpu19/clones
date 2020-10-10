import React from "react";
import "./Todo.css";
import { List, ListItem, ListItemText } from "@material-ui/core";

function Todo(props) {
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemText primary={props.todo} secondary="Deadline" />
      </ListItem>
      {/* <li>{props.todo}</li> */}
    </List>
  );
}

export default Todo;
