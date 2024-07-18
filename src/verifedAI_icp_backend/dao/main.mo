// import Result "mo:base/Result";
// import Text "mo:base/Text";
// import Principal "mo:base/Principal";
// import Nat "mo:base/Nat";
// import Buffer "mo:base/Buffer";
// import HashMap "mo:base/HashMap";
// import Time "mo:base/Time";
// import Iter "mo:base/Iter";
// import Array "mo:base/Array";
// import Bool "mo:base/Bool";
// import Hash "mo:base/Hash";
// // import Map "mo:map/Map";
// import Types "types";
// actor {

//         type Result<A, B> = Result.Result<A, B>;
//         type Member = Types.Member;
//         type ProposalContent = Types.ProposalContent;
//         type ProposalId = Types.ProposalId;
//         type Proposal = Types.Proposal;
//         type Vote = Types.Vote;
//         type HttpRequest = Types.HttpRequest;
//         type HttpResponse = Types.HttpResponse;
//         type Role = Types.Role;

//         // The principal of the Webpage canister associated with this DAO canister (needs to be updated with the ID of your Webpage canister)
//         stable let canisterIdWebpage : Principal = Principal.fromText("wqbl4-ayaaa-aaaab-qadga-cai");
//         stable var manifesto = "Providing revolutionary solutions for the education sector using
//             blockchain.";
//         stable let name = "VerifEdDAO";
//         stable var goals = [];
//         // Returns the name of the DAO
//         public query func getName() : async Text {
//                 name
//         };

//         // Returns the manifesto of the DAO
//         public query func getManifesto() : async Text {
//                 manifesto
//         };

//         // Returns the goals of the DAO
//         public query func getGoals() : async [Text] {
//                 return goals;
//         };

//         // Register a new member in the DAO with the given name and principal of the caller
//         // Airdrop 10 MBC tokens to the new member
//         // New members are always Student
//         // Returns an error if the member already exists
//         let members = HashMap.HashMap<Principal, Member>(0, Principal.equal, Principal.hash);
//         let tokencanister : actor{
//                 mint: shared (owner: Principal, amount: Nat) -> async ();
//                 burn: shared (owner: Principal, amount: Nat) -> async ();
//                 balanceOf: shared query (owner: Principal) -> async Nat;
//         } = actor("jaamb-mqaaa-aaaaj-qa3ka-cai");
//         let initial: Member = {
//             name = "motoko_bootcamp";
//             role = #Mentor;
//         };
       

       
//         let mentor_principal: Principal = Principal.fromText("nkqop-siaaa-aaaaj-qa3qq-cai");
//         members.put(mentor_principal, initial);
//         public func getMentorMint(_p: Text) : async Result<(), Text> {
            
//                 (await tokencanister.mint(Principal.fromText("nkqop-siaaa-aaaaj-qa3qq-cai"),100));
//                 return #ok();
//         };


        
        
// //"jaamb-mqaaa-aaaaj-qa3ka-cai"
//         public shared ({ caller }) func registerMember(member : Member) : async Result<(), Text> {
//                 // Register a new member in the DAO with the given name and principal of the caller
//             switch (members.get(caller)) {
//             case (null) { 
//             var newMember: Member = {
//                         name = member.name;
//                         role = #Student;
//             };               
//             members.put(caller, newMember);
//                 (await tokencanister.mint(caller,10));
//                 return #ok();
//             };
//             case (?member) {
//                 return #err("Member already exists");
//             };
//         };
//         };

//         // Get the member with the given principal
//         // Returns an error if the member does not exist
//         public shared query func getMember(p : Principal) : async Result<Member, Text> {
//             switch (members.get(p)) {
//             case (null) {
//                 return #err("Member does not exist");
//             };
//             case (?member) {
//                 return #ok(member);
//             };
//         };
//         };

//         // Graduate the student with the given principal
//         // Returns an error if the student does not exist or is not a student
//         // Returns an error if the caller is not a mentor
//         public shared ({ caller }) func graduate(member : Principal) : async Result<(), Text> {
//                 switch (members.get(caller)) {
//             case (null) {
//                 return #err("Member does not exist");
//             };
//             case (?member) {
//                 var newGraduate: Member = {
//                         name = member.name;
//                         role = #Graduate;
//                 };
//                 members.put(caller, newGraduate);
//                 return #ok();
//             };
//         };
//         };

//         // Create a new proposal and returns its id
//         // Returns an error if the caller is not a mentor or doesn't own at least 1 MBC token
//         var nextProposalId : Nat = 0;
//         let proposals = HashMap.HashMap<ProposalId, Proposal>(0, Nat.equal, func(x) {Hash.hash((x))} );
//         //  let proposals = TrieMap.TrieMap<Nat, Proposal>(0, Nat.equal, func(x) {Hash.hash(x)});

//         public shared ({ caller }) func createProposal(content : ProposalContent) : async Result<ProposalId, Text> {
//                 let balance = await tokencanister.balanceOf(caller);
//                 if (balance < 1) {
//                     return #err("The caller does not have enough tokens to create a proposal");
//                 };
//                 // var member: ?Member = members.get(caller) ;
                
//                 switch (members.get(caller)) {
//             case (null) {
//                 return #err("Member does not exist");
//             };
//             case (?member) {
//                 if ( member.role != #Mentor){
//                     return #err("This is not the mentor");
//                 };
//                 // Create the proposal and burn the tokens

//                 let proposal : Proposal = {
//                     id = nextProposalId;
//                     content;
//                     creator = caller;
//                     created = Time.now();
//                     executed = null;
//                     votes = [];
//                     voteScore = 0;
//                     status = #Open;
//                 };
//                 proposals.put(nextProposalId, proposal);
//                 nextProposalId += 1;
//                 (await tokencanister.burn(caller, 1));
//                 return #ok(nextProposalId - 1);
//             };
//             };
//         };
                

//         // Get the proposal with the given id
//         // Returns an error if the proposal does not exist
//         public query func getProposal(id : ProposalId) : async Result<Proposal, Text> {
//             switch (proposals.get(id)) {
//             case (null) {
//                 return #err("proposal does not exist");
//             };
//             case (?proposal) {
//                 return #ok(proposal);
//             };
//         };
//         };

//         // Returns all the proposals
//         public query func getAllProposal() : async [Proposal] {
//                 return Iter.toArray(proposals.vals());
//         };

//         // Vote for the given proposal
//         // Returns an error if the proposal does not exist or the member is not allowed to vote
//         public shared ({ caller }) func voteProposal(proposalId : ProposalId, yesOrNo: Bool) : async Result<(), Text> {
//          // Check if the caller is a member of the DAO
//         switch (members.get(caller)) {
//             case (null) {
//                 return #err("ok");
//             };
//             case (?member) {
//                 // Check if the proposal exists
//                 switch (proposals.get(proposalId)) {
//                     case (null) {
//                         return #err("The proposal does not exist");
//                     };
//                     case (?proposal) {
//                         // Check if the proposal is open for voting
//                         if (proposal.status != #Open) {
//                             return #err("The proposal is not open for voting");
//                         };
//                         // Check if the caller has already voted
//                         if (_hasVoted(proposal, caller)) {
//                             return #err("The caller has already voted on this proposal");
//                         };
                       
//                         let multiplierVote = switch (yesOrNo) {
//                             case (true) { 1 };
//                             case (false) { -1 };
//                         };
//                         let balance = await tokencanister.balanceOf(caller);
//                         if(member.role == #Student){
//                             var newVoteScore = proposal.voteScore + (balance * multiplierVote*0);
//                             var newExecuted : ?Time.Time = null;
//                         let newVotes = Buffer.fromArray<Vote>(proposal.votes);
//                         let newStatus = if (newVoteScore >= 100) {
//                             #Accepted;
//                         } else if (newVoteScore <= -100) {
//                             #Rejected;
//                         } else {
//                             #Open;
//                         };
//                         switch (newStatus) {
//                             case (#Accepted) {
//                                 _executeProposal(proposal.content);
//                                 newExecuted := ?Time.now();
//                             };
//                             case (_) {};
//                         };
//                         let newProposal : Proposal = {
//                             id = proposal.id;
//                             content = proposal.content;
//                             creator = proposal.creator;
//                             created = proposal.created;
//                             executed = newExecuted;
//                             votes = Buffer.toArray(newVotes);
//                             voteScore = newVoteScore;
//                             status = newStatus;
//                         };
//                         proposals.put(proposal.id, newProposal);
//                         };
//                         if(member.role == #Graduate){
//                             var newVoteScore = proposal.voteScore + (balance * multiplierVote);
//                             var newExecuted : ?Time.Time = null;
//                         let newVotes = Buffer.fromArray<Vote>(proposal.votes);
//                         let newStatus = if (newVoteScore >= 100) {
//                             #Accepted;
//                         } else if (newVoteScore <= -100) {
//                             #Rejected;
//                         } else {
//                             #Open;
//                         };
//                         switch (newStatus) {
//                             case (#Accepted) {
//                                 _executeProposal(proposal.content);
//                                 newExecuted := ?Time.now();
//                             };
//                             case (_) {};
//                         };
//                         let newProposal : Proposal = {
//                             id = proposal.id;
//                             content = proposal.content;
//                             creator = proposal.creator;
//                             created = proposal.created;
//                             executed = newExecuted;
//                             votes = Buffer.toArray(newVotes);
//                             voteScore = newVoteScore;
//                             status = newStatus;
//                         };
//                         proposals.put(proposal.id, newProposal);
//                         };
//                         if(member.role == #Mentor){
//                             var newVoteScore = proposal.voteScore + (balance * multiplierVote*5);
//                             var newExecuted : ?Time.Time = null;
//                         let newVotes = Buffer.fromArray<Vote>(proposal.votes);
//                         let newStatus = if (newVoteScore >= 100) {
//                             #Accepted;
//                         } else if (newVoteScore <= -100) {
//                             #Rejected;
//                         } else {
//                             #Open;
//                         };
//                         switch (newStatus) {
//                             case (#Accepted) {
//                                 _executeProposal(proposal.content);
//                                 newExecuted := ?Time.now();
//                             };
//                             case (_) {};
//                         };
//                         let newProposal : Proposal = {
//                             id = proposal.id;
//                             content = proposal.content;
//                             creator = proposal.creator;
//                             created = proposal.created;
//                             executed = newExecuted;
//                             votes = Buffer.toArray(newVotes);
//                             voteScore = newVoteScore;
//                             status = newStatus;
//                         };
//                         proposals.put(proposal.id, newProposal);
//                         };
                        
                        
//                         return #ok();
//                     };
//                 };
//             };
//         };
//         };

//         func _hasVoted(proposal : Proposal, member : Principal) : Bool {
//         return Array.find<Vote>(
//             proposal.votes,
//             func(vote : Vote) {
//                 return vote.member == member;
//             },
//         ) != null;
//     };

//     func _executeProposal(content : ProposalContent) : () {
//         switch (content) {
//             case (#ChangeManifesto(newManifesto)) {
//                 manifesto := newManifesto;
//             };
//             case (#AddGoal(newGoal)) {
//                 // Array.append(goals,newGoal);
//                 return ();
//             };
//          case ( #AddMentor (caller)){
//             switch (members.get(caller)) {
//             case (null) {

//             };
//             case (?member) {
//                 var newMentor: Member = {
//                         name = member.name;
//                         role = #Mentor;
//                 };
//                 members.put(caller, newMentor);
//             };
//         };
//          };
//     };
//     };

//         // Returns the Principal ID of the Webpage canister associated with this DAO canister
//         public query func getIdWebpage() : async Principal {
//                 return canisterIdWebpage;
//         };

// };
