import React from "react";
import LoginForm from "../components/authentication/LoginForm";

export default function LoginPage() {
	return (
		<section>
			<h1 className="text-center mb-4">Log In</h1>
			<LoginForm />
		</section>
	);
}
