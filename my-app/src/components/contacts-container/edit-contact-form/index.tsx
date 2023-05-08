import { StyledForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useContactContext } from "../../../context/ContactContext";
import {
  IContact,
  IContactRequest,
} from "../../../interfaces/contacts.interface";

interface IEditContactFormProps {
  contact: IContact;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditContactForm({
  setModalIsOpen,
  contact,
}: IEditContactFormProps) {
  const { editContact } = useContactContext();

  const formSchema = yup.object().shape({
    email: yup.string().email("* Email inválido").optional(),
    name: yup.string().optional(),
    phone: yup.string().optional(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactRequest>({
    resolver: yupResolver(formSchema),
  });

  return (
    <StyledForm
      onSubmit={handleSubmit((data: IContactRequest) => {
        editContact(data, contact);
        setModalIsOpen(false);
      })}
    >
      <label>
        Email <i>(Opcional)</i>
      </label>
      {errors.email && (
        <span className="error-text">{errors.email.message}</span>
      )}
      <input {...register("email")} type="email" />
      <label>
        Name <i>(Opcional)</i>
      </label>
      {errors.name && <span className="error-text">{errors.name.message}</span>}
      <input {...register("name")} type="text" />
      <label>
        Phone <i>(Opcional)</i>
      </label>
      {errors.phone && (
        <span className="error-text">{errors.phone.message}</span>
      )}
      <input {...register("phone")} type="text" />
      <button className="btn-primary" type="submit">
        Adicionar
      </button>
    </StyledForm>
  );
}
