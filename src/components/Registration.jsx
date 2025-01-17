import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Registration() {
  const [step, setStep] = useState(1);
  const [userDetails, setUserDetails] = useState({
    userName: "",
    userAge: "",
    userHobbies: "",
    userInterests: "",
    userBio: "",
    username: "",
    password: "",
    userCode: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function generateUniqueCode() {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage(""); // Clear any existing error messages

    if (step === 1) {
      if (
        !userDetails.userName.trim() ||
        !userDetails.userAge.trim() ||
        !userDetails.userHobbies.trim() ||
        !userDetails.userInterests.trim() ||
        !userDetails.userBio.trim()
      ) {
        setErrorMessage("All fields are required in Step 1.");
        return;
      }

      if (parseInt(userDetails.userAge, 10) < 15) {
        setErrorMessage("You must be at least 15 years old to register.");
        return;
      }

      setStep(2);
    } else {
      if (!userDetails.username.trim() || !userDetails.password.trim()) {
        setErrorMessage("Both Username and Password are required in Step 2.");
        return;
      }

      try {
        const response = await axios.get(
          "https://connectivity-cd2e2-default-rtdb.asia-southeast1.firebasedatabase.app/user.json"
        );

        const users = response.data || {};
        const usernameExists = Object.values(users).some(
          (user) => user.username === userDetails.username
        );

        if (usernameExists) {
          setErrorMessage("Username already exists. Please choose a different one.");
          return;
        }

        const uniqueCode = generateUniqueCode();
        const finalDetails = { ...userDetails, userCode: uniqueCode };

        await axios.post(
          "https://connectivity-cd2e2-default-rtdb.asia-southeast1.firebasedatabase.app/user.json",
          finalDetails
        );

        alert(
          `Registration successful! Your unique code is: ${uniqueCode}. It has been saved to the database.`
        );
        navigate("/"); 
      } catch (error) {
        console.error("Error during registration:", error);
        setErrorMessage("Something went wrong. Please try again later.");
      }
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {step === 1 ? "Register for Connectivity" : "Create Account Credentials"}
        </h2>

        {errorMessage && (
          <p className="text-red-500 text-sm font-medium mb-4">
            {errorMessage}
          </p>
        )}

        {step === 1 ? (
          <div className="space-y-4">
            <input
              onChange={handleChange}
              name="userName"
              value={userDetails.userName}
              type="text"
              placeholder="Enter your Name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              onChange={handleChange}
              name="userAge"
              value={userDetails.userAge}
              type="number"
              placeholder="Enter your Age"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              onChange={handleChange}
              name="userHobbies"
              value={userDetails.userHobbies}
              type="text"
              placeholder="Enter your Hobbies"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              onChange={handleChange}
              name="userInterests"
              value={userDetails.userInterests}
              type="text"
              placeholder="Enter your Interests"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <textarea
              onChange={handleChange}
              name="userBio"
              value={userDetails.userBio}
              placeholder="Give your short bio."
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>
          </div>
        ) : (
          <div className="space-y-4">
            <input
              onChange={handleChange}
              name="username"
              value={userDetails.username}
              type="text"
              placeholder="Create a Username"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              onChange={handleChange}
              name="password"
              value={userDetails.password}
              type="password"
              placeholder="Create a Password"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full py-3 bg-pink-500 text-white font-bold rounded-lg shadow-md hover:bg-pink-600 transition duration-300 mt-4"
        >
          {step === 1 ? "Next" : "Register"}
        </button>

        {step === 2 && (
          <button
            type="button"
            onClick={() => setStep(1)}
            className="w-full py-2 text-gray-600 text-sm font-bold hover:underline mt-2"
          >
            Back
          </button>
        )}
        <p className="text-center text-gray-600 mt-4">
          Already a user?{" "}
          <Link
            to="/login"
            className="text-pink-500 font-bold hover:underline"
          >
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}
