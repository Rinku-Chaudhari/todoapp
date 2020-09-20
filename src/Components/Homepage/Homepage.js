import React, { useContext } from "react";
import "./Homepage.css";

import Nav from "../Nav/Nav";
import TodoAddForm from "../TodoAddForm/TodoAddForm";
import Context from "../../context/context";
import Todos from "../Todos/Todos";

const Homepage = () => {
	const context = useContext(Context);

	return (
		<div className="homepage">
			<Nav context={context} />
			<TodoAddForm context={context} />
			<Todos context={context} />
		</div>
	);
};

export default Homepage;
