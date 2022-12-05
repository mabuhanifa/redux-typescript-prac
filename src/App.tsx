import { useDispatch, useSelector } from "react-redux";
import './App.css';
import { selectTodo } from './redux/store';
function App() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodo);
  return (
    <div>
      hello
    </div>
  )
}

export default App
