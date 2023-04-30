import React, { useState, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import Input from '../UI/input/Input';
import './style.scss';

const RegistrationForm = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repitPassword, setRepitPassword] = useState('');
  const simpleValidator = useRef(
    new SimpleReactValidator({
      element: (message) => <p className="error">{message}</p>,
    }),
  );
  const [, forceUpdate] = useState();

  const form = React.createRef();

  const submitForm = () => {
    const formValid = simpleValidator.current.allValid();
    if (!formValid) {
      simpleValidator.current.showMessages(true);
      forceUpdate(1);
    } else {
      console.log('submit form.');
    }
  };

  return (
    <form ref={form}>
      <div class="section__email">
        <p>Login</p>
        <Input
          type="text"
          placeholder="Enter your login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          onBlur={() => {
            simpleValidator.current.showMessageFor('login');
            forceUpdate(1);
          }}
        />
        {simpleValidator.current.message('login', login, 'required|min:4|max:32')}
      </div>

      <div class="section__email">
        <p>Email</p>
        <Input
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => {
            simpleValidator.current.showMessageFor('email');
            forceUpdate(1);
          }}
        />
        {simpleValidator.current.message('email', email, 'required|email')}
      </div>

      <div class="section__password">
        <p>Password</p>
        <div className='section__password-wrapp'>
          <Input
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => {
              simpleValidator.current.showMessageFor('password');
              forceUpdate(1);
            }}
          />
        </div>
        {simpleValidator.current.message('password', password, 'required|min:4|max:32')}
      </div>

      <div class="section__password">
        <p>Reenter password</p>
        <div className="section__password-wrapp">
          <Input
            placeholder="Reenter password"
            type="password"
            value={repitPassword}
            onChange={(e) => setRepitPassword(e.target.value)}
            onBlur={() => {
              simpleValidator.current.showMessageFor('Password doesnt match');
              forceUpdate(1);
            }}
          />
        </div>
        {simpleValidator.current.message('Password doesnt match', repitPassword, 'required|equal')}
      </div>

      {/* <button type="button" onClick={submitForm}>
        submit
      </button> */}
    </form>
  );
};

export default RegistrationForm;
