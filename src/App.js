import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import SignUpPage from "./pages/SignUp";
import LoginPage from "./pages/Login";
import Layout from "./components/layout/Layout";
import UserDashboard from "./pages/UserDashboard";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPasswordPage from "./pages/ForgotPassword";
import UpdateCredentials from "./components/user/UpdateCredentials";
import UpdateProfile from "./components/user/UpdateProfile";

function App() {
	return (
		<div>
			<Layout>
				<Switch>
					<Route path="/" exact component={AllMeetupsPage}></Route>
					<Route path="/new-meetup" component={NewMeetupPage}></Route>
					<PrivateRoute path="/favorites" component={FavoritesPage}></PrivateRoute>
					<Route path="/signup" component={SignUpPage}></Route>
					<Route path="/login" component={LoginPage}></Route>
					<PrivateRoute path="/user-dashboard" component={UserDashboard}></PrivateRoute>
					<PrivateRoute path="/update-credentials" component={UpdateCredentials}></PrivateRoute>
					<PrivateRoute path="/update-profile" component={UpdateProfile}></PrivateRoute>
					<Route path="/forgot-password" component={ForgotPasswordPage}></Route>
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
