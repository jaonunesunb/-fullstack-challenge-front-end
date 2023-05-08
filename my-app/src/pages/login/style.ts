import styled from "styled-components";

export const StyledLoginPage = styled.div`
  background-color: #424242;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .containerLogin {
    width: 90%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
    background-color: #bdbdbd;
    border-radius: 5px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  }

  .divLogo {
    margin-bottom: 20px;
    img {
      max-width: 200px;
      height: auto;
    }
  }

  .formLoginUser {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    p {
      margin-bottom: 5px;
      font-size: 0.8rem;
      color: #757575;
    }
  }

  .buttonReplace {
    background-color: #2979ff;
    color: #ffffff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: #2962ff;
    }
  }
`;
