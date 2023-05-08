import styled from "styled-components";

export const StyledDashboard = styled.div`
  background-color: #424242;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  color: #ffffff;
  header {
    padding: 10px;
    border-bottom: 1px solid #757575;
  }
  .header-container {
    flex-grow: 1;
    max-width: 1100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }
  .intro-container {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #757575;
    section {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;
      max-width: 1100px;
      margin: 0 auto;
    }
    span {
      font-size: 0.9em;
      color: #bdbdbd;
    }
  }
  .btn-primary {
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
  .btn-secondary {
    background-color: #ff1744;
    color: #ffffff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: #d50000;
    }
  }
`;
