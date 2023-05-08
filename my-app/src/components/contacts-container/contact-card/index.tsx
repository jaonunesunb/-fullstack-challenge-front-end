import { IContact } from "../../../interfaces/contacts.interface";
import { StyledContactsCard } from "./style";
import { MdEdit, MdDelete } from "react-icons/md";
import ModalBody from "../../Modal";
import { useState, useContext } from "react";
import EditContactForm from "../edit-contact-form";
import { ContactContext } from "../../../context/ContactContext";

interface IContactsCardProps {
  contact: IContact;
}

export default function ContactsCard({ contact }: IContactsCardProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { deleteContact } = useContext(ContactContext);

  function updateBTNCall() {
    setOpenModal(true);
  }

  function deleteBTNCall() {
    if (window.confirm(`Deseja realmente excluir o contato ${contact.name}?`)) {
      deleteContact({ id: contact.id });
    }
  }

  return (
    <StyledContactsCard>
      {openModal && (
        <ModalBody setModalIsOpen={setOpenModal} title={"Editar Contato"}>
          <EditContactForm setModalIsOpen={setOpenModal} contact={contact} />
        </ModalBody>
      )}
      <div className="cardHeader">
        <h3 className="titleCard">{contact.name}</h3>
        <div className="btnDiv">
          <button className="updateBtn" onClick={updateBTNCall}>
            <MdEdit />
          </button>
          <button className="deleteBtn" onClick={deleteBTNCall}>
            <MdDelete />
          </button>
        </div>
      </div>
      <div className="content">
        <p>
          <b>Email:</b> {contact.email}
        </p>
        {contact.phone && (
          <p>
            <b>Telefone:</b> {contact.phone}
          </p>
        )}
      </div>
    </StyledContactsCard>
  );
}
