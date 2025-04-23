import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { userContextObj } from "./UserContext";
import { useContext } from "react";
function Header() {
  const { status, logout } = useContext(userContextObj);
  return (
    <div className="bg-dark text-light">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link" to="">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="signup">
            Register
          </Link>
        </li>

        {status === false ? (
          <li className="nav-item">
            <Link className="nav-link" to="signin">
              Login
            </Link>
          </li>
        ) : (
          <li className="nav-item">
            <Link className="nav-link" to="signin" onClick={logout}>
              Logout
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;
