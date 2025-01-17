/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      setIsAuthenticated(true);
      setUser(JSON.parse(Cookies.get("userData")));
    }
  }, []);

  const login = (userData) => {
    Cookies.set("authToken", "your-token", { expires: 7 }); // Replace with actual token
    Cookies.set("userData", JSON.stringify(userData), { expires: 7 });
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    Cookies.remove("authToken");
    Cookies.remove("userData");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
