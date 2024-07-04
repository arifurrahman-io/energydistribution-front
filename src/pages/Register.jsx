import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { register: signup } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await signup(data.name, data.email, data.password);
    navigate('/');
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          {...register('name', { required: true })}
        />
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
