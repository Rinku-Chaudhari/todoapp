import React, { useState, useEffect } from "react";
import "./Todos.css";

import { db, firebase } from "../../firebase/firebase";
import DeleteIcon from "@material-ui/icons/Delete";

const Todos = ({ context }) => {
	const [loading, setLoading] = useState(true);
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		if (context.userData.uid) {
			db.collection("todos")
				.doc(context.userData.uid)
				.onSnapshot((doc) => {
					if (doc.exists) {
						const entries = Object.entries(doc.data().todos);
						const data = [];
						for (let e in entries) {
							data.push({
								id: entries[e][0],
								value: entries[e][1],
							});
						}
						setTodos(data);
						setLoading(false);
					} else {
						setLoading(false);
					}
				});
		} else {
			setLoading(false);
		}
	}, [setTodos, context.userData.uid, context.userData.length]);

	const deleteTodo = (value) => {
		db.collection("todos")
			.doc(context.userData.uid)
			.update({
				todos: firebase.firestore.FieldValue.arrayRemove(value),
			});
	};

	return (
		<div className="todos_container">
			{todos.length > 0 ? (
				todos.map((todo) => {
					return (
						<div className="todo_item" key={todo.id}>
							<p>{todo.value}</p>
							<button onClick={() => deleteTodo(todo.value)}>
								<DeleteIcon />
							</button>
						</div>
					);
				})
			) : loading ? (
				<p>Loading....</p>
			) : (
				<p>No any todos</p>
			)}
		</div>
	);
};

export default Todos;
