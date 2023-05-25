import React, { useState, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import Input from '../UI/input/Input';
import InputPassword from '../UI/inputPassword/InputPassword';
import Button from '../UI/button/Button';
import Checkbox from './../checkbox/Checkbox';
import registerUser from '../../API/registerUser';
import './style.scss';

const RegistrationForm = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [openEye, setOpenEye] = useState(true);
  const [openEyeRepeat, setOpenEyeRepeat] = useState(true);

  const simpleValidator = useRef(
    new SimpleReactValidator({
      element: (message) => <p className="error">{message}</p>,
      validators: {
        equalTo: {
          message: 'Password does not confirm',
          rule: (val, params) => {
            const otherInput = document.querySelector(params[0]);
            const isValid = val === otherInput?.value;
            return isValid;
          },
        },
      },
    }),
  );
  const [, forceUpdate] = useState(true);

  const form = React.createRef();

  const submitForm = (e) => {
    e.preventDefault();
    const formValid = simpleValidator.current.allValid();
    if (!formValid) {
      simpleValidator.current.showMessages(true);
      forceUpdate((prev) => !prev);
    } else {
      console.log('submit form.');
    }
    
    registerUser(null, (response) => {
      console.log(response);
    });
  };

  return (
    <form ref={form} onSubmit={submitForm} className='section-registration-form'>
      <div className="section-registration-form__email">
        <p>Login</p>
        <Input
          type="text"
          placeholder="Enter your login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          onBlur={() => {
            simpleValidator.current.showMessageFor('login');
            forceUpdate((prev) => !prev);
          }}
        />
        {simpleValidator.current.message('login', login, 'required|min:4|max:32')}
      </div>

      <div className="section-registration-form__email">
        <p>Email</p>
        <Input
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => {
            simpleValidator.current.showMessageFor('email');
            forceUpdate((prev) => !prev);
          }}
        />
        {simpleValidator.current.message('email', email, 'required|email')}
      </div>

      <div className="section-registration-form__password">
        <p>Password</p>
        <div className="section-registration-form__password-wrapp">
          <InputPassword
            id="password"
            placeholder="Enter your password"
            type={openEye ? 'password' : 'text'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => {
              simpleValidator.current.showMessageFor('password');
              forceUpdate((prev) => !prev);
            }}
            openEye={openEye}
            setOpenEye={setOpenEye}
          />
        </div>
        {simpleValidator.current.message('password', password, 'required|min:4|max:32')}
      </div>

      <div className="section-registration-form__password">
        <p>Reenter password</p>
        <div className="section-registration-form__password-wrapp">
          <InputPassword
            placeholder="Reenter password"
            type={openEyeRepeat ? 'password' : 'text'}
            value={repeatPassword}
            onChange={(e) => {
              setRepeatPassword(e.target.value);
            }}
            onBlur={() => {
              simpleValidator.current.showMessageFor('repeatPassword');
              forceUpdate((prev) => !prev);
            }}
            openEye={openEyeRepeat}
            setOpenEye={setOpenEyeRepeat}
          />
        </div>
        {simpleValidator.current.message(
          'repeatPassword',
          repeatPassword,
          'required|equalTo:#password',
        )}
      </div>
      <Checkbox id="1" />
      <Button>Sing up</Button>
    </form>
  );
};

export default RegistrationForm;
