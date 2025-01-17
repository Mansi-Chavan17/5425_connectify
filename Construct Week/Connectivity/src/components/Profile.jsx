import { useContext } from "react";
import { AuthContext } from "../AuthComponent/AuthContext"; 
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate("/login"); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          User Profile
        </h2>

        {user ? (
          <div className="space-y-4">
            <div>
              <span className="font-bold">Name: </span>
              <span>{user.userName}</span>
            </div>
            <div>
              <span className="font-bold">Age: </span>
              <span>{user.userAge}</span>
            </div>
            <div>
              <span className="font-bold">Hobbies: </span>
              <span>{user.userHobbies}</span>
            </div>
            <div>
              <span className="font-bold">Interests: </span>
              <span>{user.userInterests}</span>
            </div>
            <div>
              <span className="font-bold">Bio: </span>
              <span>{user.userBio}</span>
            </div>

            <button
              onClick={handleLogout}
              className="w-full py-3 bg-red-500 text-white font-bold rounded-lg shadow-md hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <p className="text-red-500 text-center font-medium">
            No user data available. Please log in.
          </p>
        )}
      </div>
    </div>
  );
};

export default Profile;
