import { useState, useRef, useEffect } from "react";

import { db } from "../../firebase";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
	const currentId = props.currentId;

	const initialStateValues = {
		title: "",
		image: "",
		address: "",
		description: "",
	};

	const [values, setValues] = useState(initialStateValues);

	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();

	const getMeetupById = async (id) => {
		const doc = await db.collection("meetups").doc(id).get();
		setValues({ ...doc.data() });
	};

	useEffect(() => {
		if (currentId === "") {
			setValues({ ...initialStateValues });
		} else {
			getMeetupById(currentId);
		}
	}, [currentId]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	function submitHandler(event) {
		event.preventDefault();

		const enteredTitle = titleInputRef.current.value;
		const enteredImage = imageInputRef.current.value;
		const enteredAddress = addressInputRef.current.value;
		const enteredDescription = descriptionInputRef.current.value;

		const meetupData = {
			title: enteredTitle,
			image: enteredImage,
			address: enteredAddress,
			description: enteredDescription,
		};

		if (currentId) {
			props.onEditMeetup(meetupData);
		} else {
			props.onAddMeetup(meetupData);
		}
	}

	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="title">Meetup Title</label>
					<input type="text" required id="title" name="title" value={values.title} onChange={handleInputChange} ref={titleInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="image">Meetup Image</label>
					<input type="url" required id="image" name="image" value={values.image} onChange={handleInputChange} ref={imageInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="address">Address</label>
					<input type="text" required id="address" name="address" value={values.address} onChange={handleInputChange} ref={addressInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="description">Description</label>
					<textarea id="description" required rows="5" name="description" value={values.description} onChange={handleInputChange} ref={descriptionInputRef}></textarea>
				</div>
				<div className={classes.actions}>
					<button>{props.currentId ? "Update Meetup" : "Add Meetup"}</button>
				</div>
			</form>
		</Card>
	);
}

export default NewMeetupForm;
