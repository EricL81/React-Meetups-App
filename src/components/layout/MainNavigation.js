import { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../store/auth-context";

import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
	const favoritesCtx = useContext(FavoritesContext);
	const { currentUser } = useAuth();

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
					<li>
						<Link to="/signup">Sign Up</Link>
					</li>
					<li>
						<Link to="/login">Log In</Link>
					</li>
					{currentUser ? (
						<li>
							<Link to="/user-dashboard">User</Link>
						</li>
					) : null}
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
