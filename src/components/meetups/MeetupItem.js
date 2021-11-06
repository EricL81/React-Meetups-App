import { useState, useContext } from "react";
import { db } from "../../firebase";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";
import NewMeetupForm from "./NewMeetupForm";

function MeetupItem(props) {
	const [currentId, setCurrentId] = useState("");
	const favoritesCtx = useContext(FavoritesContext);

	const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

	function toggleFavoriteStatusHandler() {
		if (itemIsFavorite) {
			favoritesCtx.removeFavorite(props.id);
		} else {
			favoritesCtx.addFavorite({
				id: props.id,
				title: props.title,
				description: props.description,
				image: props.image,
				address: props.address,
			});
		}
	}

	const onDeleteMeetup = async (id) => {
		if (window.confirm("Are you sure you want to delete this Meetup?")) {
			await db.collection("meetups").doc(id).delete();
		}
	};
	return (
		<li className={classes.item}>
			{currentId ? (
				<NewMeetupForm currentId={currentId} />
			) : (
				<Card>
					<div className={classes.image}>
						<img src={props.image} alt={props.title} />
					</div>
					<div className={classes.content}>
						<h3>{props.title}</h3>
						<address>{props.address}</address>
						<p>{props.description}</p>
					</div>
					<div className={classes.actions}>
						<button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? "Remove from Favorites" : "To Favorites"}</button>
						<i className="material-icons" onClick={() => setCurrentId(props.id)}>
							create
						</i>
						<i className="material-icons" onClick={() => onDeleteMeetup(props.id)}>
							close
						</i>
					</div>
				</Card>
			)}
		</li>
	);
}

export default MeetupItem;
