import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../store/auth-context";
import { Alert } from "react-bootstrap";

import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
	const favoritesCtx = useContext(FavoritesContext);
	const { currentUser, logout } = useAuth();
	const [error, setError] = useState("");
	const history = useHistory();

	async function handleLogout() {
		setError("");

		try {
			await logout();
			history.push("/");
		} catch {
			setError("Failed to log out");
		}
	}

	return (
		<header className={classes.header}>
			<nav>
				<Link to="/" className={classes.logo}>
					React Meetups
				</Link>
				<ul>
					<li>
						<Link to="/">All Meetups</Link>
					</li>
					<li>
						<Link to="/new-meetup">Add New Meetup</Link>
					</li>
					<li>
						<Link to="/favorites">
							My Favorites
							<span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
						</Link>
					</li>
					{!currentUser ? (
						<>
							<li>
								<Link to="/login">Login</Link>
							</li>
						</>
					) : null}
					{currentUser ? (
						<>
							<li>
								<Link to="/user-dashboard">User</Link>
							</li>
							<li>
								<Link to="" onClick={handleLogout}>
									Logout
								</Link>
							</li>
						</>
					) : null}
				</ul>
				{error && <Alert variant="danger">{error}</Alert>}
			</nav>
		</header>
	);
}

export default MainNavigation;
