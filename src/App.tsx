import { useDispatch, useSelector } from "react-redux";
import './App.css';
import { selectTodo } from './redux/store';
import { addTodo } from "./redux/TodoSlice";
function App() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodo);
  console.log(todos);

  return (
    <div>
      hello
      <button onClick={() => dispatch(addTodo("new"))}></button>
    </div>
  )
}

export default App
