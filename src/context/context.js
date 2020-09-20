import React from "react";

const Context = React.createContext({
	loggedIn: false,
	setLoggedIn: () => {},
	userData: false,
	setUserData: () => {},
});

export default Context;
