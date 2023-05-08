import { IUserUpdate } from "../../interfaces/users.interface";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

interface IUpdateUserForm {
  closeModal: () => void;
  updateUser: (data: IUserUpdate) => Promise<void>;
}

const UpdateUserDataForm = ({ closeModal, updateUser }: IUpdateUserForm) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [formData, setFormData] = useState<IUserUpdate>({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newErrors: { [key: string]: string } = {};
    if (!formData.name) {
      newErrors.name = "Nome é obrigatório";
    }
    if (!formData.email) {
      newErrors.email = "Email é obrigatório";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    await updateUser(formData);
    closeModal();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Nova senha</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="currentPassword">Senha atual</label>
        <input
          type="password"
          name="currentPassword"
          id="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button type="submit">Salvar alterações</button>
    </form>
  );
};

export default UpdateUserDataForm;
