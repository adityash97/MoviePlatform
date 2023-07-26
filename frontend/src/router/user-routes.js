import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../components/LoginPage";
import { RegisterPage } from "../components/RegisterPage";
import { NotFound } from "../components/NotFound";

export function UserRouter() {
  return (
    <Routes>
      <Route path="login/" element={<LoginPage />}></Route>
      <Route path="register/" element={<RegisterPage />}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
  );
}
