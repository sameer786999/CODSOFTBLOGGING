import './App.css';
import Header from './Header';
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';


function App() {
  return (
    <>
      <Header />
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />} />

          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
