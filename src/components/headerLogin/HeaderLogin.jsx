import { NavLink } from "react-router-dom";

const HeaderLogin = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <NavLink to="/">
            <img className="logo" src="./../img/logo.svg" alt="" />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default HeaderLogin;
