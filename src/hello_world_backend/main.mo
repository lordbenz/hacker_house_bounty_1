import Array "mo:base/Array";

actor {
  stable var names : [Text] = [];

  public func greet(name : Text) : async Text {
    names := Array.append(names, [name]); // Add the name to the array
    return "Hello, " # name # "!";
  };

  public query func submittedNames() : async [Text] {
    return names;
  };
};
