import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import RegisterPage from "../pages/register";
import HomePage from "../pages/homePage";
import UserPage from "../pages/userPage";

const Way = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/contacts" element={<HomePage/>}></Route>
      <Route path="users/" element={<UserPage/>}></Route>
    </Routes>
  );
};

export default Way;
