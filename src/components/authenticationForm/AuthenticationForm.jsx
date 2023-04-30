import React, { useState, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import Input from '../UI/input/Input';
import './style.scss';

const AuthenticationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const simpleValidator = useRef(
    new SimpleReactValidator({
      element: (message) => <p className='error'>{message}</p>,
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
        <div className="section__password-wrapp">
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

      {/* <button type="button" onClick={submitForm}>
        submit
      </button> */}
    </form>
  );
};

export default AuthenticationForm;
