import React, { createContext, useContext, useEffect, useState } from "react";

interface UserContextType {
  principalId: string | null;
  setPrincipalId: (id: string) => void;
}

const UserContext = createContext<UserContextType>({
  principalId: null,
  setPrincipalId: (id: string) => {
    // No-op function
  },
});

export const usePrincipalId = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [principalId, setPrincipalIdState] = useState<string | null>(null);

  useEffect(() => {
    const priId = localStorage.getItem("principalId");
    if (priId) {
      setPrincipalIdState(priId);
    }
  }, []);

  const setPrincipalId = (id: string) => {
    setPrincipalIdState(id);
    localStorage.setItem("principalId", id);
  };

  return (
    <UserContext.Provider value={{ principalId, setPrincipalId }}>
      {children}
    </UserContext.Provider>
  );
};
