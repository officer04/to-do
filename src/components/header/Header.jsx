import { NavLink } from 'react-router-dom';
import './style.scss';

const HeaderValidation = ({ state, settingHeader}) => {

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <NavLink to="/">
            <img onClick={settingHeader} className="logo" src="./../img/logo.svg" alt="" />
          </NavLink>
          {state && (
            <div className="to-come">
              <ul>
                <NavLink to="/authorization">
                  <li onClick={settingHeader}>
                    <a href="#!">
                      <b>Войти</b>  
                    </a>
                  </li>
                </NavLink>
                <NavLink to="/registration">
                  <li onClick={settingHeader}>
                    <a href="#!" className="btn--home">
                      Начать бесплатно
                    </a>
                  </li>
                </NavLink>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderValidation;
