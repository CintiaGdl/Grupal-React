import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { API } from '../../shared/services/api';

const Registerform = () => {

  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const onSubmit = (formData) => {
    API.post('users/register', formData).then((response) => {
      console.log(response);
      navigate('/login');
    })
  }

  return (
    <div className='pages'>
      <form onSubmit={handleSubmit(onSubmit)}>
         <label>Name</label>
         <input type="text" name="name" {...register('name', {required: true})}/>
         <label>Email</label>
         <input type="email" name="email" {...register('email', {required: true, pattern: /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}/>
         <label>Password</label>
         <input type="password" name="password" {...register('password', {required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/})}/>
         <button>Register</button>
       </form>
    </div>
  );
}

export default Registerform;
