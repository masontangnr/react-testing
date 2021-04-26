import React, {useState} from 'react'
import { useForm } from "react-hook-form";


const NewTodo = () => {

  let [todo, setTodo] = useState([]);
  
  const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
    console.log(data)
		setTodo([...todo, data]);
	};

  return (
    <div>
			<h1>Todo List</h1>
			{todo.map((item, id) => (
				<p key={id}>{item.todo}</p>
			))}
			<form onSubmit={handleSubmit(onSubmit)}>
					<input id='todo' name='todo' type='text' {...register("todo")} />
				<button id='submit-button'>Submit</button>
			</form>
		</div>
  )
}

export default NewTodo
