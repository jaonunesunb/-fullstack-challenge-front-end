import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  max-width: 370px;
  gap: 20px;
  background-color: #f5a623;
  color: #ffffff;
  padding: 20px;
  border-radius: 5px;

  input {
    outline: transparent;
    background-color: #ffb54d;
    border: 1px solid #e85d4a;
    border-radius: 5px;
    padding: 10px;
    color: #ffffff;
  }

  input:focus {
    border: 1px solid #ffffff;
  }

  .form-title {
    text-align: center;
  }

  .to-register-window {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  button {
    background-color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    color: #e85d4a;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
  }

  button:hover {
    background-color: #e85d4a;
    color: #ffffff;
  }
`;
