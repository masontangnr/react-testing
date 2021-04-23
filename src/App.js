import "./App.css";
import Todo from './components/Todo/Todo';
import { Router } from "@reach/router"
import NewTodo from './components/NewTodo/NewTodo';
import CopyTodo from './components/CopyTodo/CopyTodo'

function App() {
	return (
		<Router>
      <CopyTodo path='/' />
      <Todo path='/todo' />
      <NewTodo path='/newtodo' />
		</Router>
	);
}

export default App;
