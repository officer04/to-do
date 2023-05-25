import { NavLink } from 'react-router-dom';
import './styles.scss';

const Home = ({state, settingHeader}) => {
  return (
    <section className="section-home">
      <div className="container">
        <div className="section-home__wrapper">
          <div className="content">
            <h1 className="content__title">Организуйте работу и жизнь.</h1>
            <p className="content__text">
              Todoist – список дел и таск-менеджер № 1 в мире. Он поможет вам обрести концентрацию,
              организованность и покой.
            </p>
            <NavLink to="/registration" className="btn--home" >
                Начать бесплатно
            </NavLink>
            <NavLink to="/change" ><p >привет, тут можно редактировать</p></NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
