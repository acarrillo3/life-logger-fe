import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../../store/actions';
import { LoginForm as Form } from '../styles';

const LoginForm = props => {
  const dispatch = useDispatch();

  const { isFetching } = useSelector(state => state.users);
  // console.log('is fetching: ', isFetching );

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchUser(user));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <h2>Login</h2>

        <input
          name="username"
          placeholder="username or email"
          value={user.username}
          onChange={handleChange}
        />

        <input
          name="password"
          placeholder="password"
          type="password"
          value={user.password}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
        <button onClick={() => props.setActiveForm('register')}>
          Or register here!
        </button>
      </div>
    </Form>
  );
};

export default LoginForm;
