import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/loginPage";
export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
