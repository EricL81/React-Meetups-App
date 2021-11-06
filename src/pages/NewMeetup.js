import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";
import { db } from "../firebase";

function NewMeetupPage() {
	const history = useHistory();

	const addOrEditMeetupHandler = async (meetupData) => {
		await db.collection("meetups").doc().set(meetupData);
		console.log("new link added");
		history.replace("/");
	};

	return (
		<section>
			<h1>New Meetup Page</h1>
			<NewMeetupForm onAddMeetup={addOrEditMeetupHandler} />
		</section>
	);
}

export default NewMeetupPage;
