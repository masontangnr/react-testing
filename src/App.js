import "./App.css";
//import Todo from './components/Todo';
import { Router } from "@reach/router"
//import NewTodo from './components/NewTodo';
import CopyTodo from './components/CopyTodo/CopyTodo'

function App() {
	return (
		<Router>
      <CopyTodo path='/' />
		</Router>
	);
}

export default App;
