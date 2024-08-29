import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFakeAuth from "../hooks/useFakeAuth";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useFakeAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
};

export default ProtectedRoute;
