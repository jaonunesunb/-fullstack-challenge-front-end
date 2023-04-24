import styled from "styled-components";

export const ModelButton = styled.button`
  background-color: rgb(var(--color-blue), 1);
  width: 136px;
  height: 48px;
  border-radius: 13px;
  border: none;
  color: rgb(var(--color-white), 1);
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.2rem;

  &:hover {
    filter: brightness(80%);
  }
`;
