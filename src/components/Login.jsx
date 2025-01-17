import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../AuthComponent/AuthContext";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage("");

    try {
      // Fetch user data from Firebase or your backend
      const response = await axios.get(
        "https://connectivity-cd2e2-default-rtdb.asia-southeast1.firebasedatabase.app/user.json"
      );
      const users = response.data;

      // Find a matching user
      const foundUser = Object.values(users).find(
        (user) =>
          user.username === credentials.username &&
          user.password === credentials.password
      );

      if (foundUser) {
        login(foundUser); // Update context and set cookies
        alert("Login successful!");
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        setErrorMessage("Invalid username or password. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login to Connectivity
        </h2>

        <div className="space-y-4">
          <input
            onChange={handleChange}
            name="username"
            value={credentials.username}
            type="text"
            placeholder="Enter your Username"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            onChange={handleChange}
            name="password"
            value={credentials.password}
            type="password"
            placeholder="Enter your Password"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {errorMessage && (
            <p className="text-red-500 text-sm font-medium">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
