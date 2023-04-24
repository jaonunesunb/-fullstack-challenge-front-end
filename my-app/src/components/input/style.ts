import styled from "styled-components";

export const ModelInput = styled.label`
  display: flex;
  flex-direction: column;

  input {
    margin-top: 5px;
    border-top: 0px;
    border-width: 0px;
    border-left: 0px;
    border-bottom: 2px solid rgb(var(--color-blue), 1);
    background-color: transparent;
    height: 2rem;
    padding: 1.5rem 1rem;
  }
  input:focus {
    outline: 0;
  }
`;
