import { useNavigate } from "react-router-dom";
import useFakeAuth from "../hooks/useFakeAuth";
import styles from "./User.module.css";

const User = () => {
  const { user, logout } = useFakeAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/");
  };

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default User;
