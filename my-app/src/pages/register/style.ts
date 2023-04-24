import styled, { css, keyframes } from "styled-components";

export const StyleRegisterPage = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: rgb(var(--color-blue), 1);

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      margin-top: 20px;
      color: rgb(var(--color-white), 1);
      font-size: 25px;
    }
    .btnRegister {
      display: flex;

      /* button {
        padding: 1rem;
        width: 148px;
        height: 95px;
        color: rgb(var(--color-white), 1);
        background-color: rgb(var(--color-blue), 1);
        border: 2.5px solid transparent;
        font-size: 16px;
        text-align: left;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-right: 5px;
      } */
      /* button:focus {
        border: 2.5px solid rgb(var(--color-white), 1);
        border-radius: 15px;
      } */
    }
  }

  .containerRegister {
    width: 292px;
    min-height: 500px;

    background-color: rgb(var(--color-white), 1);
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 11px;
    margin: 20px 0;

    .divLogo {
      width: 100;
      display: flex;
      justify-content: center;

      img {
        width: 230px;
        height: 63px;
        margin-top: 8px;
        margin-bottom: 30px;
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

      p {
        margin-top: -14px;
        margin-bottom: 10px;
        font-size: 12px;
        color: red;
      }

      label {
        font-size: 16px;
      }

      Input {
        margin-bottom: 20px;
        width: 217px;
      }

      button {
        margin-top: 20px;
      }
    }

    .login-container {
      max-width: 260px;
      text-align: center;
      margin-bottom: 20px;
      p {
        width: 100%;
        text-align: center;
        margin: 10px 0px;
      }

      .buttonReplace {
        background-color: transparent;
        border: none;
        color: rgb(var(--color-blue), 1);
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;

    header {
      margin-right: 30px;
      h1 {
        color: rgb(var(--color-white), 1);
        font-size: 40px;
        margin-bottom: 30px;
      }
      .btnRegister {
        display: flex;
        flex-direction: column;

        button {
          font-size: 20px;
          width: 230px;
        }
        button:focus {
          border: 2.5px solid rgb(var(--color-white), 1);
          border-radius: 10px;
        }
      }
    }
  }

  @media (min-width: 1020px) {
    .containerRegister {
      width: 330px;
      height: 580px;

      .divLogo {
        img {
          height: 93px;
        }
      }
    }
  }
`;

const alertAnimation = keyframes`
  0% {
    border: 2.5px solid transparent;
    color: white;
  }
  50% {
    border: 2.5px solid red;
    color: red;
  }
  100% {
    border: 2.5px solid transparent;
    color: white;
  }
`;

interface SpecialButtonProps {
  alert: boolean;
  active: boolean;
}

export const SpecialButton = styled.button`
  padding: 1rem;
  width: 148px;
  height: 95px;
  color: rgb(var(--color-white), 1);
  background-color: rgb(var(--color-blue), 1);
  border-radius: 10px;
  font-size: 16px;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 5px;
  border: ${({ active }: SpecialButtonProps) =>
    active ? "2.5px solid white" : "2.5px solid transparent"};
  color: ${({ active }: SpecialButtonProps) =>
    active ? "rgb(var(--color-white))" : "rgb(var(--color-grey-dark))"};
  ${({ alert, active }: SpecialButtonProps) =>
    alert &&
    !active &&
    css`
      animation: ${alertAnimation} 1.6s ease-in-out infinite;
    `}
`;
