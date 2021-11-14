import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./firebase";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import App from "./App";
import { FavoritesContextProvider } from "./store/favorites-context";
import { AuthProvider } from "./store/auth-context";

ReactDOM.render(
	<AuthProvider>
		<FavoritesContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</FavoritesContextProvider>
	</AuthProvider>,

	document.getElementById("root")
);
