import React, { useState } from "react";
import Button from "../components/Button";
import { useEffect } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();

        if (email === "" || password === "") {
            alert("Please fill all the fields");
            return;
        }

        const user = localStorage.getItem("user");
        if (!user) {
            alert("No user found");
            return;
        }
        const parsedUser = JSON.parse(user);
        if (parsedUser.email !== email || parsedUser.password !== password) {
            alert("Invalid email or password");
            return;
        }

        alert("Login successful");
    }

    return (
        <div className="max-w-md p-6 mx-auto mt-8 bg-blue-100 border-2 border-gray-300 rounded-lg">
            <h1 className="mb-6 text-2xl font-bold text-center text-blue-800">
                Login
            </h1>

            <form className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="email" className="block font-medium text-gray-700">
                        Email Address:<sup className="text-red-600">*</sup>
                    </label>
                    <input
                        className="w-full p-2 bg-white border-2 border-gray-300 rounded-lg"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="password" className="block font-medium text-gray-700">
                        Password:<sup className="text-red-600">*</sup>
                    </label>
                    <input
                        className="w-full p-2 bg-white border-2 border-gray-300 rounded-lg"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="py-2">
                    <label htmlFor="remember" className="flex items-center text-gray-700">
                        <input
                            type="checkbox"
                            id="remember"
                            name="remember"
                            className="mr-2"
                        />
                        Remember me
                    </label>
                </div>

                <div className="pt-2">
                    <Button title="Login" Sub={handleLogin} />
                </div>

                <div className="pt-2 text-center">
                    <p className="text-gray-700">
                        Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up here</a>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Login;