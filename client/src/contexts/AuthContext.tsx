import React, { createContext, useContext, useState } from "react";
import { AuthContextType, authType } from "../models/authContextTypes";

const authContext = createContext<authType>({ setUsername: () => {} });

const AuthContext: React.FC<AuthContextType> = ({ children }) => {
  const [auth, setAuth] = useState({ userName: "" });
  const setUsername = (name: string) => {
    setAuth({ userName: name });
  };
  return (
    <authContext.Provider value={{ auth, setUsername }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContext;
export const useAuthContextValue = () => useContext(authContext);
