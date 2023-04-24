import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContactContext } from "../../context/ContactContext";
import { UserContext } from "../../context/UserContext";

const HomePage = () => {
  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>Bem-vindo(a), {user?.name}!</h1>
      <button onClick={handleLogout}>Logout</button>
      <Link to={"/register/contact"}>Cadastrar contato</Link>
    </div>
  );
};

export default HomePage;
