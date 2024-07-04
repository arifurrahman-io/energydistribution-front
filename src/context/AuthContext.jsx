import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode  } from 'jwt-decode';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: localStorage.getItem('token'),
    user: null,
  });

  useEffect(() => {
    if (authState.token) {
      const decoded = jwtDecode (authState.token);
      setAuthState({ ...authState, user: decoded.user });
    }
  }, [authState.token]);

  const login = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      const decoded = jwtDecode (res.data.token);
      setAuthState({ token: res.data.token, user: decoded.user });
    } catch (error) {
      console.error(error);
    }
  };

  const register = async (name, email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
      localStorage.setItem('token', res.data.token);
      const decoded = jwtDecode (res.data.token);
      setAuthState({ token: res.data.token, user: decoded.user });
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthState({ token: null, user: null });
  };

  return (
    <AuthContext.Provider value={{ authState, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
