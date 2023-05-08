import styled from "styled-components";

export const StyledUserPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  header {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    box-sizing: border-box;
  }

  .header-container {
    display: flex;
    justify-content: flex-end;

    button {
      font-size: 16px;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      color: #ffffff;
      background-color: #e74c3c;
      cursor: pointer;

      &:hover {
        background-color: #c0392b;
      }
    }
  }

  .intro-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 100%;

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 5px;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
      box-sizing: border-box;

      h2 {
        margin-bottom: 10px;
        color: #333333;
      }

      p {
        margin: 5px 0;
        color: #666666;
      }

      .btn-primary {
        margin-top: 10px;
        font-size: 16px;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        color: #ffffff;
        background-color: #00a8ff;
        cursor: pointer;

        &:hover {
          background-color: #0072b5;
        }
      }

      .btn-delete-account {
        margin-top: 10px;
        font-size: 16px;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        color: #ffffff;
        background-color: #e74c3c;
        cursor: pointer;

        &:hover {
          background-color: #c0392b;
        }
      }
    }
  }
`;
