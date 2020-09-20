import React, { useState } from "react";
import "./TodoAddForm.css";

import { db, firebase } from "../../firebase/firebase";
import AddIcon from "@material-ui/icons/Add";

const TodoAddForm = ({ context }) => {
	const [todo, setTodo] = useState("");
	const addTodo = (e) => {
		e.preventDefault();
		if (todo.trim() !== "") {
			db.collection("todos")
				.doc(context.userData.uid)
				.get()
				.then((doc) => {
					if (doc.exists) {
						db.collection("todos")
							.doc(context.userData.uid)
							.update({
								todos: firebase.firestore.FieldValue.arrayUnion(
									todo
								),
							});
					} else {
						db.collection("todos")
							.doc(context.userData.uid)
							.set({
								todos: firebase.firestore.FieldValue.arrayUnion(
									todo
								),
							});
					}
				});
		}
		setTodo("");
	};

	return (
		<div className="todo_add_form">
			<form className="todo-add-form" onSubmit={addTodo}>
				<input
					type="text"
					value={todo}
					onChange={(e) => setTodo(e.target.value)}
					placeholder="What is next?"
				/>
				<button type="submit">
					<AddIcon />
				</button>
			</form>
		</div>
	);
};

export default TodoAddForm;
