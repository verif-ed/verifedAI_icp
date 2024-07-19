import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Text "mo:base/Text";
import Array "mo:base/Array";

actor {
    // Define a type to represent a certificate
    type Certificate = {
        testId : Text;
        certificateName : Text;
        dateAwarded : Text; // You can use a more precise date type if available
    };

    // Define a type to represent user data, including certificates
    type User = {
        principalId : Principal;
        certificates : [Certificate];
    };

    // Store user data using a HashMap
    let userCertificates = HashMap.HashMap<Principal, User>(0, Principal.equal, Principal.hash);

    public query ({ caller }) func whoami() : async Principal {
        return caller;
    };
    // Query to retrieve the caller's principal

    // Function to initialize user data if logging in for the first time
    public shared ({ caller }) func initializeUser() : async () {
        // Check if user already exists
        switch (userCertificates.get(caller)) {
            case (null) {
                // User does not exist, initialize with empty certificates
                let newUser : User = {
                    principalId = caller;
                    certificates = [];
                };
                userCertificates.put(caller, newUser);
            };
            case (?user) {
                // User already exists, do nothing
            };
        };
    };

    // Function to add a certificate to the user's account
    public shared ({ caller }) func addCertificate(testId : Text, certificateName : Text, dateAwarded : Text) : async () {
        switch (userCertificates.get(caller)) {
            case (?user) {
                let newCertificate : Certificate = {
                    testId = testId;
                    certificateName = certificateName;
                    dateAwarded = dateAwarded;
                };
                let updatedCertificates = Array.append<Certificate>(user.certificates, [newCertificate]);
                let updatedUser : User = {
                    principalId = caller;
                    certificates = updatedCertificates;
                };
                userCertificates.put(caller, updatedUser);
            };
            case (null) {
                // User not found, do nothing or handle error
            };
        };
    };

    // Query to fetch the user's certificates based on the caller's principal
    public query ({ caller }) func getUserCertificates() : async [Certificate] {
        switch (userCertificates.get(caller)) {
            case (null) {
                // User not found, return empty array
                return [];
            };
            case (?user) {
                // User found, return their certificates
                return user.certificates;
            };
        };
    };

};
