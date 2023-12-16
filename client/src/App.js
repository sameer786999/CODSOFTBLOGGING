import './App.css';
import Header from './Header';
import Post from './Post';
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";



function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
