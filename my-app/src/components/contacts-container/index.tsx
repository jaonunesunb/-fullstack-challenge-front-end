import { useState, useEffect } from "react";
import { useContactContext } from "../../context/ContactContext";
import Modal from "../Modal";
import ContactsCard from "./contact-card";
import { StyledContactsContainer } from "./style";
import { BsPersonFillAdd } from "react-icons/bs";
import CreateContactForm from "./create-contact-form";
import { IContact } from "../../interfaces/contacts.interface";

export default function ContactsContainer() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const { contacts, setContacts } = useContactContext();

  useEffect(() => {
    async function fetchContacts() {
      const res = await fetch("/api/contacts");
      const data = await res.json();
      setContacts(data);
    }
    fetchContacts();
  }, [setContacts]);

  return (
    <StyledContactsContainer>
      {modalIsOpen && (
        <Modal setModalIsOpen={setModalIsOpen} title={"Adicionar Contato"}>
          <CreateContactForm setModalIsOpen={setModalIsOpen} />
        </Modal>
      )}
      <h2 className="title">Meus contatos</h2>
      <button onClick={onClickOpenModal} className="btn-open-modal">
        <BsPersonFillAdd />
      </button>
      <div className="contact-cards-container">{LoadContacts()}</div>
    </StyledContactsContainer>
  );

  function LoadContacts() {
    if (contacts.length > 0) {
      return contacts.map((contact: IContact) => (
        <ContactsCard key={contact.id} contact={contact} />
      ));
    } else {
      return <h4>Ainda não há contatos</h4>;
    }
  }

  function onClickOpenModal() {
    setModalIsOpen(true);
  }
}
