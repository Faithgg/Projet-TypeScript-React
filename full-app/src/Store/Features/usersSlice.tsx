import {createSlice} from '@reduxjs/toolkit'

//   let users = require('../../Datas/Users.json')
let storageData = localStorage.getItem('Users');
let users = storageData? JSON.parse(storageData) : [];
  const initialState = users;
  
export const usersSlice = createSlice({
    name : 'usersSlice',
    initialState,
    reducers: {
        addUser : (state : any ,action : any) => {

            const users = [...state,{
                id : action.payload.id,
                firstName : action.payload.firstName,
                lastName : action.payload.lastName,
                level  : action.payload.level
            }];
            localStorage.setItem('Users', JSON.stringify(users));
            return users;
        }
    }
})

export const {addUser} = usersSlice.actions;

export default usersSlice.reducer;