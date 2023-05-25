import { NavLink } from "react-router-dom";

const HeaderBase = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <NavLink to="/">
            <img  className="logo" src="./../img/logo.svg" alt="" />
          </NavLink>
          <div className="to-come">
            <ul>
              <NavLink to="/authorization">
                <li >
                  <span href="#!">
                    <b>Войти</b>
                  </span>
                </li>
              </NavLink>
              <NavLink to="/registration">
                <li >
                  <span href="#!" className="btn--home">
                    Начать бесплатно
                  </span>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderBase;
