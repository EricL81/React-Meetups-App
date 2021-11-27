import React from "react";
import UserCredentials from "../components/user/UserCredentials";
import UserProfile from "../components/user/UserProfile";

export default function UserDashboard() {
	return (
		<>
			<h1>User Dashboard</h1>
			<UserCredentials />
			<UserProfile />
		</>
	);
}
