import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useAuth } from "../../store/auth-context";
import { Link } from "react-router-dom";
import { db } from "../../firebase";

export default function UserProfile() {
	const { currentUser } = useAuth();
	const [user, setUser] = useState();

	const getUserById = async (uid) => {
		const userData = await db.collection("users").doc(uid).get();
		setUser({ ...userData.data() });
	};

	console.log(user);

	useEffect(() => {
		getUserById(currentUser.uid);
	}, [currentUser.uid]);

	return (
		<Card>
			<Card.Body>
				<h2 className="text-center mb-4">User Profile</h2>
				<div>
					<strong>First name: </strong>
					{user ? user.firstName : null}
				</div>
				<div>
					<strong>Last name: </strong>
					{user ? user.lastName : null}
				</div>
				<div>
					<strong>Alias: </strong>
					{user ? user.alias : null}
				</div>
				<div>
					<strong>Email: </strong>
					{user ? user.email : null}
				</div>
				<Link to="" className="btn btn-primary w-100 mt-3">
					Update Profile
				</Link>
			</Card.Body>
		</Card>
	);
}
