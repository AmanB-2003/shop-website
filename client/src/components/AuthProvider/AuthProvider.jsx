//` components/AuthProvider/AuthProvider.jsx
    
import React, { useState } from "react";
import { AuthContext } from "../../hooks/context/AuthContext";
//import { message } from "antd";
import { useEffect } from "react";
import { getToken } from "../../helpers";

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const authToken = getToken();

  const fetchLoggedInUser = async (token) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();

      setUserData(data);
    } catch (error) {
      console.error(error);
      //message.error("Error While Getting Logged In User Details");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUser = (user) => {
    setUserData(user);
  };

  useEffect(() => {
    if (authToken) {
      fetchLoggedInUser(authToken);
    }
  }, [authToken]);

  return (
    <AuthContext.Provider
      value={{ user: userData, setUser: handleUser, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;