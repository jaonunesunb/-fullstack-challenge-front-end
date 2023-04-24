import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

interface IContact {
  id?: number;
  name?: string;
  email?: string;
  phone?: string;
  clientId?: number;
}

interface IContactContext {
  contact: IContact | null;
  getContact: (id: number) => Promise<IContact>;
  allContacts: IContact[];
  getAllContacts: () => Promise<IContact[]>;
  registerContact: (contact: IContactRequest) => Promise<IContactRegisterResponse>;
}


interface IContactRequest {
  name?: string;
  email?: string;
  phone?: string;
}

interface IContactRegisterResponse {
  id?: number;
  name?: string;
  email?: string;
  phone?: string;
  clientId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export const ContactContext = createContext({} as any);

interface IContextProps {
  children: ReactNode;
}

const ContactContextProvider = ({ children }: any) => {
  const [contact, setContact] = useState<IContact | null>(null);
  const [allContacts, setAllContacts] = useState<IContact[]>([]);
  const navigate = useNavigate();

  const getAllContacts = async () => {
    try {
      const contacts = await api.get("/contacts");
      setAllContacts(contacts.data);
      return contacts.data;
    } catch (err) {
      console.log(err);
    }
  };

  const registerContact = async (contact: IContactRequest) => {
    try {
      const response = await api.post<IContactRegisterResponse>(
        "/contacts",
        contact
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  const getContact = async (id: number) => {
    try {
      const response = await api.get<IContact>(`/contacts/${id}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  

  return (
    <ContactContext.Provider
      value={{
        contact,
        getContact,
        allContacts,
        getAllContacts,
        registerContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactContextProvider;
