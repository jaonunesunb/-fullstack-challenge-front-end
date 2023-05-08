import { useContext } from "react";
import { Link } from "react-router-dom";
import ContactProvider from "../../context/ContactContext";
import { UserContext } from "../../context/UserContext";
import { StyledDashboard } from "./styles";
import ContactsContainer from "../../components/contacts-container";

const HomePage = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <StyledDashboard className="dashboard">
      <header>
        <div className="header-container">
          <button onClick={() => logout()} className="btn-secondary">
            Sair
          </button>
          <Link to="/users/" className="btn-primary">
            Perfil
          </Link>
        </div>
      </header>
      <div className="intro-container">
        <section>
          <h2>Olá, {user?.name}</h2>
        </section>
      </div>
      <ContactProvider>
        <ContactsContainer />
      </ContactProvider>
    </StyledDashboard>
  );
};

export default HomePage;
