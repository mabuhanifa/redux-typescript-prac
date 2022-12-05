import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import { selectTodo } from './redux/store';
import { addTodo } from "./redux/TodoSlice";
function App() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodo);
  const todoRef = useRef<HTMLInputElement>(null)
  const createTodo = () => {
    if (todoRef.current) {
      dispatch(addTodo(todoRef.current.value))
    }
  }
  console.log(todos);
  return (
    <div>
      <input type="text" ref={todoRef} />
      <button onClick={createTodo}>Add Todo</button>
    </div>
  )
}

export default App
