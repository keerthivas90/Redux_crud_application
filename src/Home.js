import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteuser } from './Reducers/UserReducer';


const Home = () => {
  const users= useSelector(state=>state.users);
 const dispatch=useDispatch();
  const handleDelete=(id)=>{
    dispatch(deleteuser({id:id}));
  }
  return (
    <div className='container'>
        <h1> Home </h1>
        <Link to="/Create" className='btn btn-success my-3' >Create</Link>
        <table className='table' style={{ border: "1px solid black" }}>
          <thead >
            <tr>
              <th> ID </th>
              <th> Name </th>
              <th> Email </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index)=>(
              <tr key={index}>
              <td> {user.id}</td>  
              <td> {user.name}</td>  
              <td> {user.email}</td>  
                <td>
                  <Link to={`/Edit/${user.id}`}  className='btn btn-sm btn-primary'>Edit</Link>
                  <button onClick={()=>handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                </td>
              </tr>
            ))}
           
          </tbody>
        </table>
    </div>
  )
}

export default Home