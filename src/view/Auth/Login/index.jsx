/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { InputField, Button } from '../../../Reuseable';
import { isEmail } from '../../../helpers/formValidator';
import { AuthLayout } from '../../../layout';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../redux/sagas/auth/login';
import { loginSelector, clearState } from '../../../redux/reducers/auth/login';
import {BaseUrl} from "../../../Env"

const Index = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const token = sessionStorage.getItem('token');
  React.useEffect(() => {
    dispatch(clearState());
  }, []);
  // Variables & States
  const { authenticating, authenticated, errors, isError } =
    useSelector(loginSelector);
  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState({
    email: 'Admin@residify.com',
    password: 'admin1234',
  });
  // Functions
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const { email, password } = user;
    if (isEmail(email) && password) {
      dispatch(loginUser(user));
    }
  };
  console.log(user)

  if (authenticated && token !== null) {
    console.log(token);
    sessionStorage.setItem('token', token)
    history.push('/dashboard');
    console.log("logged in")
    
  }

  return (
    <AuthLayout
      content={
        <form onSubmit={handleSubmit}>
          <h3>Administrative Panel</h3>
          <div className='input_field_wrapper'>
            <h6 className='label'>Email Address</h6>
            <InputField
              fieldname='email'
              onTextChange={handleChange}
              value={user.email}
              placeholder='Your Email'
            />
            {submitted && !user.email && (
              <p className='error-msg'>Email field cannot be blank</p>
            )}
            {submitted && user.email && !isEmail(user.email) && (
              <p className='error-msg'>Invalid email address</p>
            )}
          </div>
          <div className='input_field_wrapper'>
            <h6 className='label'>Password</h6>
            <InputField
              fieldname='password'
              onTextChange={handleChange}
              inputType='password'
              placeholder='Your Password'
            />
            {submitted && !user.password && (
              <p className='error-msg'>Password field cannot be blank</p>
            )}
            {isError && errors && <p className='error-msg'>{errors.error}</p>}
          </div>
          <div className='others_wrapper'>
            <Checkbox style={{ cursor: 'pointer' }}>
              &nbsp;&nbsp;&nbsp;Remember me
            </Checkbox>
            <Link
              to='/forgot-password/step-1'
              style={{ textDecoration: 'none', color: '#000' }}
            >
              forgot password?
            </Link>
          </div>
          <Button loading={authenticating} primary full text='LOGIN' />
        </form>
      }
    />
  );
};

export default Index;
