import React, { useState, useEffect } from "react";
import { AuthClient } from "@dfinity/auth-client";
import { HttpAgent, Actor } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";

// Define the Motoko actor interface inline
const actorInterface = ({ IDL }: { IDL: any }) => {
  return IDL.Service({
    whoami: IDL.Func([], [IDL.Principal], ["query"]),
  });
};

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loginStatus, setLoginStatus] = useState<string>("");
  const [userTokens, setUserTokens] = useState<string | null>(null); // Use null to signify tokens are not yet fetched

  useEffect(() => {
    const savedPrincipal = localStorage.getItem("principal");
    if (savedPrincipal) {
      setIsLoggedIn(true);
      setLoginStatus(`Logged in as: ${savedPrincipal}`);
    }
  }, []);

  const handleLogin = async () => {
    try {
      const authClient = await AuthClient.create();
      const iiUrl = "https://identity.ic0.app"; // Use a hardcoded URL for Internet Identity

      await authClient.login({
        identityProvider: iiUrl,
        onSuccess: async () => {
          const identity = authClient.getIdentity();
          const agent = new HttpAgent({ identity });
          const actor = Actor.createActor(actorInterface, {
            agent,
            canisterId: "22w4c-cyaaa-aaaab-qacka-cai", // Replace with your actual backend canister ID
          });

          try {
            const principal: Principal | null =
              (await actor.whoami()) as Principal | null;
            if (principal && typeof principal.toText() === "function") {
              setIsLoggedIn(true);
              const principalText = principal.toText();
              setLoginStatus(`Logged in as: ${principalText}`);
              localStorage.setItem("principal", principalText); // Save principal to localStorage
              onLogin();
              // Fetch user tokens after successful login
              // Initialize user tokens if logging in for the first time
              await actor.initializeUserTokens();
            } else {
              throw new Error("Invalid principal returned");
            }
          } catch (error) {
            console.error(
              "Error calling whoami or initializeUserTokens:",
              error
            );
            setLoginStatus("Failed to retrieve data");
          }
        },
        onError: (err) => {
          console.error("Internet Identity login error:", err);
          setLoginStatus("Login failed");
        },
      });
    } catch (error) {
      console.error("Error during login:", error);
      setLoginStatus("Login failed");
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>{loginStatus}</p>
          {userTokens !== null && <p>Tokens: {userTokens}</p>}{" "}
          {/* Render tokens only if fetched */}
        </>
      ) : (
        <button
          className="w-max p-3 py-2 px-4 bg-white font-bold text-black rounded-xl text-xl border-2 border-orange-600 hover:bg-gray-300 "
          onClick={handleLogin}
        >
          <span className="text-lg">Login with Internet Identity</span>
        </button>
      )}
    </div>
  );
};

export default Login;
