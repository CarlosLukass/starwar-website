import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/home.jsx";
import { Single } from "./views/single.jsx";
import Offcanvas from "./component/Browser-Data/menu/offcanvas/Offcanvas.jsx";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";


	return (
		<div>
			<BrowserRouter basename={basename}>
				<Offcanvas />
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/details/:category/:id">
						<Single />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
