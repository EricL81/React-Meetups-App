import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
	const favoritesCtx = useContext(FavoritesContext);

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
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
