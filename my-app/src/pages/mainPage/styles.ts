import styled from "styled-components";

export const StyleMainScreenDev = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15px;

  background-color: rgb(var(--color-grey), 1);
  background-attachment: scroll;
  color: rgb(var(--color-black), 1);
  span {
    font-weight: 700;
    color: rgb(var(--color-blue), 1);
  }

  button {
    border-radius: 0px;
  }

  h2 {
    text-align: center;
    margin-top: 15px;
  }

  .divHeader {
    width: 100%;
    min-height: 60px;
    gap: 20px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: rgb(var(--color-white), 1);
  }

  .divSubHeaderTop {
    width: 80%;
    margin-top: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 120px;
      height: 80px;
    }

    button {
      background-color: transparent;
      border: none;
      color: rgb(var(--color-blue), 1);
    }
  }

  .divSubHeaderBotton {
    width: 100%;
    margin-bottom: px;
    padding-bottom: 5px;
    gap: 5px;

    display: flex;
    justify-content: center;

    background-color: rgb(var(--color-white), 1);

    .groupButton {
      width: 80%;
      display: flex;
      justify-content: center;
      gap: 15px;
    }

    .buttonEditProfiline {
      background-color: rgb(var(--color-blue));
    }

    .buttonLogout {
      color: rgb(var(--color-black), 1);
    }

    button {
      color: rgb(var(--color-white), 1);
      background-color: rgb(var(--color-grey), 1);
      border: none;

      width: 100px;
      height: 27px;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .imgCompany {
    background-color: rgb(var(--color-grey-dark), 1);
    border-radius: 100%;
    height: 150px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
  }

  .divMainTop {
    width: 80%;
    margin: 25px 0px 52px 0px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .SubDivMainTop {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 7.5px;

      img {
        width: 100%;
        max-width: 120px;
      }

      h4 {
        font-weight: 500;
      }

      p {
        color: rgb(var(--color-grey-dark));
        font-weight: 500;
        font-size: 14px;
      }

      ul {
        width: 100%;
        max-width: 150px;
      }
    }

    button {
      max-width: 153.9px;
      height: 29.9px;
    }
  }

  form {
    width: 80%;
    margin-bottom: 7.5px;
    display: flex;
    justify-content: center;
  }

  .divCard {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .DivCards {
    width: 80%;
    display: flex;
    flex-wrap: wrap;

    ul {
      min-height: 200px;
    }
  }

  li {
    display: flex;

    align-items: center;
  }

  @media (min-width: 372px) {
    /* ul {
      justify-content: center;
    } */
  }

  @media (min-width: 375px) {
    /* ul {
      justify-content: center;
      padding-top: 25px;
      padding-bottom: 25px;
    } */
  }

  @media (min-width: 728px) {
    .divCard {
      width: 100%;
      display: flex;
      align-content: flex-start;
    }

    .DivCards {
      flex-wrap: wrap;
      background-color: rgb(var(--color-blue), 1);
      padding: 8px;
      margin-top: 10px;
      border-radius: 5px;

      ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-content: center;
        justify-content: space-evenly;
        width: 100%;
        gap: 5px;

        li {
          height: max-content;
          margin: 0;
        }
      }
    }
    .ulTechs {
    }
  }

  @media (min-width: 768px) {
    min-height: 100vh;
  }

  @media (min-width: 449px) {
    .DivCards {
      flex-wrap: wrap;
      background-color: rgb(var(--color-blue), 1);
      padding: 8px;

      ul {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-content: center;
        justify-content: space-evenly;
        width: 100%;
        gap: 9px;

        li {
          height: max-content;
          margin: 0;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    .divMainTop {
      width: 25%;
    }

    .container {
      width: 100%;
      min-height: 100vh;
      flex-direction: row;
      align-items: flex-start;
      margin-bottom: 25px;
    }

    .logoImg {
      width: 35px;
      height: 35px;
    }

    .imgCompany {
      display: flex;
    }

    form {
      margin: 0%;
      width: auto;
      height: 34px;

      input {
        height: 34px;
      }
      button {
        height: 34px;
      }
    }

    .divCard {
      height: 105%;
      margin: 0;
      padding-top: 25px;
      gap: 0;
    }

    .divProfile {
      display: none;
    }

    .divMainTop {
      margin: 25px 0px 0px 25px;
    }

    /* ul {
      margin: 15px;
      height: 90%;
      align-content: flex-start;

      padding: 25px 0;
      gap: 5px;
    } */

    li {
      width: 340px;
    }
  }
`;
