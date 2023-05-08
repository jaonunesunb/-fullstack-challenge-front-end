import styled from "styled-components";

export const StyledContactsCard = styled.div`
  border: 1px solid #dddddd;
  border-radius: 10px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  @media only screen and (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
  }

  .cardHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .titleCard {
      font-size: 24px;
      font-weight: bold;
      margin: 0;
      color: #333333;
    }

    .btnDiv {
      display: flex;
      align-items: center;

      button {
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
        padding: 10px 20px;
        border-radius: 5px;
        margin-left: 10px;
        cursor: pointer;
        transition: 0.2s;

        &:first-child {
          margin-left: 0;
        }
      }

      .updateBtn {
        color: #ffffff;
        background-color: #00a8ff;

        &:hover {
          background-color: #0072b5;
        }
      }

      .deleteBtn {
        color: #ffffff;
        background-color: #e74c3c;

        &:hover {
          background-color: #c0392b;
        }
      }
    }
  }

  .content {
    color: #666666;

    p {
      font-size: 18px;
      margin: 0 0 10px 0;

      b {
        font-weight: bold;
        color: #333333;
      }
    }
  }
`;
