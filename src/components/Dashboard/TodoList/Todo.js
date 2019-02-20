import React from "react";
import { SortableElement } from "react-sortable-hoc";

import DeleteButton from "components/Dashboard/DeleteButton";
import TodoText from "components/Dashboard/TodoList/TodoText";
import DragHandle from "components/Dashboard/DragHandle";
import EditTodoModal from "components/Dashboard/TodoList/EditTodoModal";
import DueDate from "components/Dashboard/TodoList/DueDate";

// define a component that is a sortable element using react-sortables SortableElement function
// pass id to DeleteButton so that when delete butotn is clicked, it has the id of the todo and can delete the appropriate one from the state
const Todo = SortableElement((props) => {
  const { _id, text, category, indexInList, dueDate } = props.todo;

  return (
    <div className="todo-item" id={_id}>
      <div className="content">
        <i className="white right triangle icon" />
        <TodoText id={_id} todo={text} />
      </div>
      <div className="todo-tools">
        <DueDate dueDate={dueDate} />
        <EditTodoModal title={text} category={category} todoId={_id} indexInList={indexInList} dueDate={dueDate} />
        <DeleteButton id={_id} target={"todo"} />
        <DragHandle />
      </div>
    </div>
  );
});

export default Todo;
