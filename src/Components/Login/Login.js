import React, { useContext } from "react";
import "./Login.css";

import { auth, provider } from "../../firebase/firebase";
import Context from "../../context/context";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const Login = () => {
	const context = useContext(Context);

	const login = () => {
		auth.signInWithPopup(provider).then((result) => {
			context.setUserData(result.user);
			context.setLoggedIn(true);
		});
	};

	return (
		<div className="login">
			<div className="icon">
				<PlaylistAddIcon />
			</div>
			<button onClick={login}>
				<i className="fab fa-google"></i>
				<p>Login With Google</p>
			</button>
		</div>
	);
};

export default Login;
