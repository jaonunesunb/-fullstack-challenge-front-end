import { ModalStyle } from "./style";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface IModalBodyProps {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  title?: string;
}

export default function ModalBody({
  setModalIsOpen,
  children,
  title,
}: IModalBodyProps) {
  return (
    <ModalStyle>
      <div className="modalDiv">
        <div className="modal-header">
          <h2>{title}</h2>
          <button
            onClick={() => setModalIsOpen(false)}
          >
            {<AiOutlineCloseCircle />}
          </button>
        </div>
        <div className="modalChildren">{children}</div>
      </div>
    </ModalStyle>
  );
}
