import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Todo = () => {
	const list = [
		{
			todo: "Try",
		},
		{
			todo: "yes",
		},
	];

	let [todo, setTodo] = useState(list);

	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		setTodo([...todo, data]);
	};

	return (
		<div>
			<h1>Todo List</h1>
			{todo.map((item, id) => (
				<p key={id}>{item.todo}</p>
			))}
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor='todo'>
					What needs to be done
					<input id='todo' name='todo' type='text' {...register("todo")} />
				</label>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default Todo;
