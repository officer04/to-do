import { NavLink } from 'react-router-dom';
import AuthenticationForm from '../../components/authenticationForm/AuthenticationForm';
import './style.scss';

const Authentication = () => {
  return (
    <section className="section-authentication">
      <div className="container">
        <div className="section-authentication__wrapper">
          <div className="section-authentication__content">
            <h1 className="section-authentication__title">Welcome back!</h1>
            <p className="section-authentication__text">Sign In to access your dashboard, settings and projects.</p>

            <AuthenticationForm />
           
            <p className="section-authentication__footer"> Don't have an account? <span><NavLink to="/registration">Sign Up</NavLink></span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authentication;
