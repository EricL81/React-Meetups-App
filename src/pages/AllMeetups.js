import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { db } from "../firebase";

function AllMeetupsPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedMeetups, setLoadedMeetups] = useState([]);

	const getMeetups = () => {
		db.collection("meetups").onSnapshot((querySnapshot) => {
			const docs = [];
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setIsLoading(false);
			setLoadedMeetups(docs);
		});
	};

	useEffect(() => {
		setIsLoading(true);
		getMeetups();
	}, []);

	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}

	return (
		<section>
			<h1>All Meetups Page</h1>
			<MeetupList meetups={loadedMeetups} />
		</section>
	);
}

export default AllMeetupsPage;
