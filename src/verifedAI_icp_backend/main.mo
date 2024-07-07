import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Map "mo:base/HashMap";
import Text "mo:base/Text";

actor {
    // Define a type to represent user tokens
    type UserTokens = {
        principalId: Principal;
        verifed_tokens: Nat;
    };

    // Store user tokens using a HashMap
    let userTokens = HashMap.HashMap<Principal, UserTokens>(0, Principal.equal, Principal.hash);

    // Query to retrieve the caller's principal
    public query ({ caller }) func whoami() : async Principal {
        return caller;
    };

    // Query to fetch user tokens based on the caller's principal
    public query ({ caller }) func getUserTokens() : async Nat {
        switch (userTokens.get(caller)) {
            case (null) {
                // User not found, return default value (0 tokens)
                return 0;
            };
            case (?tokens) {
                // User found, return their tokens
                return tokens.verifed_tokens;
            };
        };
    };

    // Function to initialize user tokens if logging in for the first time
    public shared ({ caller }) func initializeUserTokens() : async () {
        // Check if user already exists
        switch (userTokens.get(caller)) {
            case (null) {
                // User does not exist, initialize with default tokens (0)
                let newUserTokens : UserTokens = {
                    principalId = caller;
                    verifed_tokens = 0;
                };
                userTokens.put(caller, newUserTokens);
            };
            case (?tokens) {
                // User already exists, do nothing
            };
        };
    };

    public query func getTotalRegisteredUsers() : async Nat {
        return userTokens.size();
    };
    
  type UniqueID = Text;

  type Entry = {
    //type of test
    desc: Text;
    // user id(address or something)
    user: Text
  };

  let exams = Map.HashMap<UniqueID, Entry>(0, Text.equal, Text.hash);

  public func insert(code : UniqueID, entry : Entry): async () {
    exams.put(code, entry);
  };

  public query func lookup(name : UniqueID) : async ?Entry {
    exams.get(name)
  };
};
