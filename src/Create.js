import React, { useState } from 'react'
import { adduser } from './Reducers/UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
  
const CreateApp = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const dispatch=useDispatch();
  const users=useSelector(state=>state.users);
  const navigate = useNavigate();
  const handleSubmit =(e)=>{
    e.preventDefault();
    dispatch(adduser({
      id:users? users.length + 1 : 1,
      name,
      email
    }));
    navigate("/");
  }
   
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-tems-center '>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h1> Add New User </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' className='form-control' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' className='form-control' placeholder='Enter emailID' onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <button className='btn btn-info'>Submit</button>
        </form>
      </div>        
    </div>
  )
}

export default CreateApp