import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import SignUpPage from "./pages/SignUp";
import Layout from "./components/layout/Layout";

function App() {
	return (
		<div>
			<Layout>
				<Switch>
					<Route path="/" exact>
						<AllMeetupsPage />
					</Route>
					<Route path="/new-meetup">
						<NewMeetupPage />
					</Route>
					<Route path="/favorites">
						<FavoritesPage />
					</Route>
					<Route path="/signup">
						<SignUpPage />
					</Route>
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
