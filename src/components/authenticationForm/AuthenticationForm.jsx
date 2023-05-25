import React, { useState, useRef } from 'react';

import SimpleReactValidator from 'simple-react-validator';
import Input from '../UI/input/Input';
import InputPassword from '../UI/inputPassword/InputPassword';
import Button from '../UI/button/Button';
import Checkbox from './../checkbox/Checkbox';
import './style.scss';

const AuthenticationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openEye, setOpenEye] = useState(true);
  const simpleValidator = useRef(
    new SimpleReactValidator({
      element: (message) => <p className="error">{message}</p>,
    }),
  );
  const [, forceUpdate] = useState(true);

  const form = React.createRef();

  const submitForm = () => {
    const formValid = simpleValidator.current.allValid();
    if (!formValid) {
      simpleValidator.current.showMessages(true);
      forceUpdate((prev) => !prev);
    } else {
      console.log('submit form.');
    }
  };

  return (
    <form ref={form} className='section-authentication-form'>
      <div className="section-authentication-form__email">
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

      <div className="section-authentication-form__password">
        <p>Password</p>
        <div className="section-authentication-form__password-wrapp">
          <InputPassword
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
        
        <Checkbox id="1"/>
        <Button>Sing in</Button>
      </div>
    </form>
  );
};

export default AuthenticationForm;
