import React from "react";
import ForgotPasswordForm from "../components/authentication/ForgotPasswordForm";

export default function ForgotPasswordPage() {
	return (
		<section>
			<h1 className="text-center mb-4">Password Reset</h1>
			<ForgotPasswordForm />
		</section>
	);
}
