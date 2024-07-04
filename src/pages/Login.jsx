import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await login(data.email, data.password);
    navigate('/');
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register('email', { required: true })}
        />
        <input
          type="password"
          placeholder="Password"
          {...register('password', { required: true })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
