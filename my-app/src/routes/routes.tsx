import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import RegisterPage from "../pages/register";
import HomePage from "../pages/mainPage";

const Way = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/home" element={<HomePage/>}></Route>
    </Routes>
  );
};

export default Way;
