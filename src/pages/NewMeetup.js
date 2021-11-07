import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";
import { db } from "../firebase";

function NewMeetupPage() {
	const history = useHistory();

	const addMeetupHandler = async (meetupData) => {
		await db.collection("meetups").doc().set(meetupData);
		console.log("new link added");
		history.replace("/");
	};

	return (
		<section>
			<h1 style={{ color: "#2e0077" }}>New Meetup Page</h1>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</section>
	);
}

export default NewMeetupPage;
