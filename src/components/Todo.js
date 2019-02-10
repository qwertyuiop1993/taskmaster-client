import React from "react";
import { SortableElement } from "react-sortable-hoc";

import DeleteButton from "./DeleteButton";
import TodoText from "./TodoText";

// define a component that is a sortable element using react-sortables SortableElement function
// pass id to DeleteButton so that when delete butotn is clicked, it has the id of the todo and can delete the appropriate one from the state
const Todo = SortableElement(props => {
  const { _id, text } = props.todo;
  return (
    <div className="todo-item" id={_id}>
      <div className="content">
        <i className="white right triangle icon"></i>
        <TodoText id={_id} todo={text} />
      </div>
      <div className="todo-tools">
        <DeleteButton id={_id} target={"todo"} />
        <i className="fas fa-grip-vertical" aria-label="Drag to reorder" title="Drag to reorder"></i>
      </div>
    </div>
  );
});

export default Todo;
