import React ,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { edituser } from './Reducers/UserReducer';

const Edit = () => {
  const {id}=useParams();
  const users=useSelector(state=>state.users);
  const CurrentUser= users.filter((user)=>user.id==id);
  const {name , email}= CurrentUser[0]  ;
  const [currentname,setCurrentname]=useState(name);
  const [currentemail,setCurrentemail]=useState(email);
  const navigate=useNavigate();
  const dispath=useDispatch();
  const handleEdit=(e)=>{
    e.preventDefault();
    dispath(edituser({
      id:id,
      name:currentname,
      email:currentemail
    }));
    navigate("/Redux_crud_application");

  }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-tems-center '>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h1> Edit {currentname}   User </h1>
        <form onSubmit={handleEdit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' className='form-control' placeholder='Enter Name' value={currentname} onChange={(e)=>{setCurrentname(e.target.value)}}  />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' className='form-control' placeholder='Enter emailID' value={currentemail}  onChange={(e)=>{setCurrentemail(e.target.value)}}  />
          </div>
          <button className='btn btn-info'>Edit</button>
        </form>
      </div>        
    </div>
  )
}

export default Edit