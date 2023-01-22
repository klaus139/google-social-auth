import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  // console.log(user)
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Klaus App
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src={user.picture || user.avatar_url}
              alt=""
              className="avatar"
            />


          </li>
          <li className="listItem">{user.name || user.login}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="link" to="login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;