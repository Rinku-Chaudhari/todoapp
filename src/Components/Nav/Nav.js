import React from "react";
import "./Nav.css";

import { firebase } from "../../firebase/firebase";

const Nav = ({ context, history }) => {
	const logout = () => {
		firebase
			.auth()
			.signOut()
			.then((res) => {
				context.setUserData([]);
				context.setLoggedIn(false);
				history.push("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="todo_nav">
			<p>TodoApp</p>

			<div>
				<img src={context.userData.photoURL} alt="profile_img" />
				<button onClick={logout}>Logout</button>
			</div>
		</div>
	);
};

export default Nav;
