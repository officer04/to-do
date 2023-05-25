import { NavLink } from 'react-router-dom';
import RegistrationForm from '../../components/registrationForm/RegistrationForm';
import './style.scss';

const Registration = () => {
  return (
    <section className="section-registration">
      <div className="container">
        <div className="section-registration__wrapper">
          <div className="section-registration__content">
            <h1 className="section-registration__title">Welcome back!</h1>
            <p className="section-registration__text">Sign In to access your dashboard, settings and projects.</p>

            <RegistrationForm/>

            <p className="section-registration__footer">
              Already have an account? <span><NavLink to='/authorization'>Sign In</NavLink></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
