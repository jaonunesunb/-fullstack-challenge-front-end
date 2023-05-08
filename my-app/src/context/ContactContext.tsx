import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  IContact,
  IContactRequest,
  IContactDelete,
  IContactUpdate,
} from "../interfaces/contacts.interface";
import api from "../services/api";

export const ContactContext = createContext<IContactContextExports>(
  {} as IContactContextExports
);

interface IContactContextExports {
  contacts: IContact[];
  setContacts: React.Dispatch<React.SetStateAction<IContact[]>>;
  editContact: (
    data: IContactRequest,
    contact: IContact
  ) => void;
  createContact: (data: IContactRequest) => void;
  deleteContact: (data: IContactDelete) => void;
}

function ContactProvider({ children }: any) {
  const [contacts, setContacts] = useState<IContact[]>([] as IContact[]);

  useEffect(() => {
    loadContacts();
  }, []);

  function loadContacts() {
    api
      .get<IContact[]>("/contacts")
      .then(({ data }) => {
        setContacts(data);
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }

  function createContact(data: IContactRequest) {
    if (!data.name || !data.email || !data.phone) {
      toast.error("Por favor, preencha todos os campos obrigatórios", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    api
      .post<IContact>("/contacts", { ...data })
      .then((response) => {
        const newContact = response.data;
        toast.success("Contato criado", {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setContacts([...contacts, newContact]);
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }

  function deleteContact(data: IContactDelete) {
    api
      .delete(`/contacts/${data.id}/`)
      .then((response) => {
        toast.success("Contato deletado", {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        const updatedContacts = contacts.filter(
          (contact) => contact.id !== data.id
        );
        setContacts(updatedContacts);
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }

  function editContact(
    data: IContactUpdate,
    contact: IContact
  ) {
    if (!data.name || !data.email || !data.phone) {
      toast.error("Por favor, preencha todos os campos obrigatórios", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    api
      .patch(`/contacts/${contact.id}/`, data)
      .then((response) => {
        toast.success("Contato atualizado", {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        const updatedContactIndex = contacts.indexOf(contact);
        contacts.splice(updatedContactIndex, 1, {
          ...contact,
          ...data,
        });
        setContacts([...contacts]);
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }
  return (
    <ContactContext.Provider
      value={{
        contacts,
        setContacts,
        createContact,
        editContact,
        deleteContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export function useContactContext() {
  return useContext(ContactContext);
}

export default ContactProvider;
