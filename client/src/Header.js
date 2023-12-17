import { Link, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";

export default function Header() {
  
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",

    })
    
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
  
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">
        MyBlog
      </Link>
      <nav>
        <Link to="/create">Create new post</Link>

        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <a onClick={logout}>Logout ({username})</a>
          </>
        )}
      </nav>
    </header>
  );
}
