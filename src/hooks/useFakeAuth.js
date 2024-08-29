import { useContext } from "react";
import FakeAuthContext from "../contexts/FakeAuthContext";

const useFakeAuth = () => {
  const context = useContext(FakeAuthContext);
  if (context === undefined)
    throw new Error("FakeAuthContext was used outside FakeAuthProvider");
  return context;
};

export default useFakeAuth;
