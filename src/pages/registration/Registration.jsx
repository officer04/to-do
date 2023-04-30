import { NavLink } from 'react-router-dom';
import Button from '../../components/UI/button/Button';
import RegistrationForm from '../../components/registrationForm/RegistrationForm';
import './style.scss';

const Registration = () => {

  return (
    <section class="section">
      <div class="container">
        <div class="section__wrapper">
          <div class="section__content">
            <h1 class="section__title">Welcome back!</h1>
            <p class="section__text">Sign In to access your dashboard, settings and projects.</p>

            <RegistrationForm/>

            <div class="confirmation">
              <div class="confirmation__checkbox">
                <input id="1" type="checkbox" />
                <label for="1">Keep me signed in</label>
              </div>
            </div>
            <Button>Sing up</Button>
            <p class="section__footer">
              Already have an account? <span><NavLink to='/authorization'>Sign In</NavLink></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
