import Button from '../../components/UI/button/Button';
import './style.scss';
import AuthenticationForm from '../../components/authenticationForm/AuthenticationForm';
import { NavLink } from 'react-router-dom';

const Authentication = () => {
  return (
    <section class="section">
      <div class="container">
        <div class="section__wrapper">
          <div class="section__content">
            <h1 class="section__title">Welcome back!</h1>
            <p class="section__text">Sign In to access your dashboard, settings and projects.</p>

            <AuthenticationForm />

            <div class="confirmation">
              <div class="confirmation__checkbox">
                <input id="1" type="checkbox" />
                <label for="1">Keep me signed in</label>
              </div>
            </div>
            <Button>Sing in</Button>
            <p class="section__footer"> Don't have an account? <span><NavLink to="/registration">Sign Up</NavLink></span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authentication;
