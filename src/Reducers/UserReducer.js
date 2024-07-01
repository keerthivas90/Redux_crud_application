import { createSlice } from "@reduxjs/toolkit";
import { userList } from '../Data';
const userSlice=createSlice({
    name:"users",
    initialState: userList,
    reducers:{
       adduser:(state,action)=>{
            state.push(action.payload)
       } ,
       edituser:(state,action)=>{
         const {id,name,email}=action.payload;
         const UpdatedUser=state.find((user)=>user.id===id);
        if( UpdatedUser){
            UpdatedUser.name=name;
            UpdatedUser.email=email;
        }  
       },
       deleteuser:(state,action)=>{
            const {id}=action.payload;
             const UpdatedUser=state.find((user)=>user.id===id);
              
            if( UpdatedUser){
                 return state.filter(user=>user.id !== id);
            } 
       }
    }
})
export const {adduser,edituser,deleteuser} = userSlice.actions;
export default userSlice.reducer;
