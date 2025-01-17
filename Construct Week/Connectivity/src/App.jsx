import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import NotFound from "./components/Notfound";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile"; 
import AuthProvider from "./AuthComponent/AuthContext"; 
import ProtectedRoute from "./AuthComponent/ProtectedRoute" 
// import MatchMaking from "./components/MatchMaking";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
          />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
          />
      </Routes>
    </AuthProvider>
    // <MatchMaking />
  );
}

export default App;

