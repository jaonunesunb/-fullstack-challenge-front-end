import styled from "styled-components";

export const LoginPage = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgb(var(--color-blue), 1);

  .containerLogin {
    width: 292px;
    height: 488px;

    background-color: rgb(var(--color-white), 1);
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    padding-top: 11px;

    .divLogo {
      width: 100;

      display: flex;
      justify-content: center;

      img {
        width: 215.38px;
        height: 93px;
        margin-top: 15px;
        margin-bottom: 50px;
        transition: all 0.4s ease-in-out;
      }

      img:hover {
        transform: scale(1.2, 1.2);
      }
    }

    form {
      display: flex;
      flex-direction: column;

      align-items: center;

      label {
        font-size: 16px;
      }

      Input {
        margin-bottom: 20px;
        width: 217px;
      }

      p {
        margin-top: -14px;
        margin-bottom: 10px;
        font-size: 12px;
        color: red;
      }
    }

    p {
      width: 100%;
      text-align: center;
      margin: 10px 0px;
    }

    a {
      text-align: center;
    }

    .buttonReplace {
      background-color: transparent;
      border: none;
      color: rgb(var(--color-blue), 1);
    }
  }
`;
