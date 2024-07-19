import React, { createContext, useContext, useEffect, useState } from "react";

interface UserContextType {
  principalId: string | null;
}

const UserContext = createContext<UserContextType>({ principalId: null });

export const usePrincipalId = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: any }) => {
  const [principalId, setPrincipalId] = useState(""); // State to hold the principal ID

  useEffect(() => {
    const priId = localStorage.getItem("principalId");
    if (priId) {
      setPrincipalId(priId);
    }
  }, []);

  return (
    <UserContext.Provider value={{ principalId }}>
      {children}
    </UserContext.Provider>
  );
};
