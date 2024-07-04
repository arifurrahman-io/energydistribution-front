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
    <div className="flex flex-col max-w-[400px] shadow-md mx-auto mt-10 p-10">
      <h1 className='text-2xl py-3 mx-auto'>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col py-5'>
        <input
          type="text"
          placeholder="Name"
          className='my-2 p-3 bg-green-100'
          {...register('name', { required: true })}
        />
        <input
          type="email"
          placeholder="Email"
          className='my-2 p-3 bg-green-100'
          {...register('email', { required: true })}
        />
        <input
          type="password"
          placeholder="Password"
          className='my-2 p-3 bg-green-100'
          {...register('password', { required: true })}
        />
        <button type="submit" className='mt-2 bg-green-500 text-white'>Register</button>
      </form>
    </div>
  );
};

export default Register;
