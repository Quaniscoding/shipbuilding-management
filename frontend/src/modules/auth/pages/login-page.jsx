import React from "react";
import AuthCard from "../components/auth-card.jsx";
import LoginForm from "../components/login-form.jsx";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-lg flex flex-col lg:flex-row w-full max-w-4xl">
        <div className="w-full lg:w-1/2 p-6 hidden lg:block">
          <AuthCard />
        </div>
        <div className="w-full lg:w-1/2 p-6">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
