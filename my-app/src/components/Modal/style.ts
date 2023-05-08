import styled from "styled-components";

export const ModalStyle = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  .modalDiv {
    background-color: #ff6347;
    width: 90%;
    max-width: 400px;
    border-radius: 5px;
    overflow: hidden;
    .modal-header {
      background-color: #ff6347;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      button {
        font-size: 2em;
        color: white;
        cursor: pointer;
        transition: 0.2s;
        background-color: transparent;
        border: none;
      }
      button:hover {
        color: black;
      }
    }
    .modalChildren {
      padding: 20px;
      input {
        background-color: #f8f8f8;
        border: none;
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
        width: 100%;
      }
    }
  }
`;
