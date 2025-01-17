import { useContext } from "react";
import { AuthContext } from "../AuthComponent/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">Welcome, {user?.userName}!</h1>
    </div>
  );
};

export default Dashboard;
