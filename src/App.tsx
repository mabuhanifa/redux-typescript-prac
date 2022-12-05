import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import { selectTodo } from './redux/store';
import { addTodo, removeTodo } from "./redux/TodoSlice";
function App() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodo);
  const todoRef = useRef<HTMLInputElement>(null)
  const createTodo = () => {
    if (todoRef.current) {
      dispatch(addTodo(todoRef.current.value));
      todoRef.current.value = "";
    }
  }
  const deleteTodo = (id: number) => {
    dispatch(removeTodo(id))
  }
  return (
    <div>
      {
        todos && todos.map((todo) =>
        (
          <div key={todo.id}>
            <h4>{todo.text}</h4>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        )
        )
      }
      <input type="text" ref={todoRef} />
      <button onClick={createTodo}>Add Todo</button>
    </div>
  )
}

export default App
