import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import ModalBody from "../../components/Modal";
import { StyledUserPage } from "./styles";
import { IUserUpdate } from "../../interfaces/users.interface";
import EditAccountForm from "../../components/FormUserEdit";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const { user, updateUser, logout, deleteContact } = useContext(UserContext);
  const [formData, setFormData] = useState<IUserUpdate>({});

  const navigate = useNavigate();

  function handleDeleteAccount() {
    deleteContact();
  }

  function handleEditAccount() {
    setModalIsOpen(true);
  }

  return (
    <StyledUserPage>
      {modalIsOpen && (
        <ModalBody setModalIsOpen={setModalIsOpen} title={"Editar Conta"}>
          <EditAccountForm
            closeModal={() => setModalIsOpen(false)}
            updateUser={function (data: IUserUpdate): Promise<void> {
              throw new Error("Function not implemented.");
            }}
          />
        </ModalBody>
      )}
      <header>
        <div className="header-container">
          <button onClick={() => logout()} className="btn-secondary">
            Sair
          </button>
          <button
            onClick={() => navigate("/contacts")}
            className="btn-secondary"
          >
            Voltar
          </button>
        </div>
      </header>
      <div className="intro-container">
        <section>
          <h2>Meus dados</h2>
          <p>
            <strong>Nome:</strong> {user?.name}
          </p>
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
          <button onClick={handleEditAccount} className="btn-primary">
            Editar Conta
          </button>
          <button onClick={handleDeleteAccount} className="btn-delete-account">
            Deletar Conta
          </button>
        </section>
      </div>
    </StyledUserPage>
  );
};

export default UserPage;
