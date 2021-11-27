import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../store/auth-context";
import { Link, useHistory } from "react-router-dom";
import { db } from "../../firebase";

export default function UpdateCredentials() {
	const firstNameInputRef = useRef();
	const lastNameInputRef = useRef();
	const aliasInputRef = useRef();
	const emailInputRef = useRef();

	const { currentUser } = useAuth();
	const [error, setError] = useState("");
	const history = useHistory();
	const [user, setUser] = useState();

	const getUserById = async (uid) => {
		const userData = await db.collection("users").doc(uid).get();
		setUser({ ...userData.data() });
	};

	useEffect(() => {
		getUserById(currentUser.uid);
	}, [currentUser.uid]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	function handleSubmit(e) {
		e.preventDefault();

		const enteredFirstName = firstNameInputRef.current.value;
		const enteredLastName = lastNameInputRef.current.value;
		const enteredAlias = aliasInputRef.current.value;
		const enteredEmail = emailInputRef.current.value;

		const userData = {
			firstName: enteredFirstName,
			lastName: enteredLastName,
			alias: enteredAlias,
			email: enteredEmail,
		};

		const editUserHandler = async (userData) => {
			setError("");

			try {
				await db.collection("users").doc(currentUser.uid).update(userData);
				history.push("/user-dashboard");
			} catch {
				setError("Failed to update the profile");
			}
		};

		editUserHandler(userData);
	}

	return (
		<>
			<Card>
				<Card.Body>
					<h2 className="text-center mb-4">Update Profile</h2>
					{error && <Alert variant="danger">{error}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group id="firstName">
							<Form.Label>First name</Form.Label>
							<Form.Control type="text" ref={firstNameInputRef} defaultValue={user ? user.firstName : null} onChange={handleInputChange}></Form.Control>
						</Form.Group>
						<Form.Group id="lastName">
							<Form.Label>Last name</Form.Label>
							<Form.Control type="text" ref={lastNameInputRef} defaultValue={user ? user.lastName : null} onChange={handleInputChange}></Form.Control>
						</Form.Group>
						<Form.Group id="alias">
							<Form.Label>Alias</Form.Label>
							<Form.Control type="text" ref={aliasInputRef} defaultValue={user ? user.alias : null} onChange={handleInputChange}></Form.Control>
						</Form.Group>
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" ref={emailInputRef} defaultValue={user ? user.email : null} onChange={handleInputChange}></Form.Control>
						</Form.Group>
						<Button className="w-100 mt-4" type="submit">
							Update
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<div className="w-100 text-center mt-2">
				<Link to="/user-dashboard">Cancel</Link>
			</div>
		</>
	);
}
