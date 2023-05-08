import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
//import { IClient, IContact } from "../interfaces/User";

const ListUsers = () => {
  const { allUsers, getAllUsers } = useContext(UserContext);
  const [user, setUser] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  useEffect(() => {
    const clientList = allUsers.filter((user: any) => "contacts" in user);
    setUser(clientList);
  }, [allUsers]);

  useEffect(() => {
    const contactList = allUsers.filter((user: any) => !("contacts" in user));
    setContacts(contactList);
  }, [allUsers]);

  return (
    <>
      <h1>Clientes</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {user.map((client: any) => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Contatos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>ID do Cliente</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact: any) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>{contact.clientId}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button>Cadastrar Contato</button>
    </>
  );
};

export default ListUsers;
