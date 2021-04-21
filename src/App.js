import "./App.css";
import Todo from './components/Todo';
import { Router } from "@reach/router"

function App() {
	return (
		<Router>
			<Todo path='/' />
		</Router>
	);
}

export default App;
