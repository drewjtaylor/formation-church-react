import { createSlice } from "@reduxjs/toolkit";
import {demoUsers} from '../demoData/demoUsers';

const initialState = {
    existingUsers: demoUsers,
    currentUser: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            return {
                ...state, 
                currentUser: action.payload
            }
        }
    }
});

export const userReducer = userSlice.reducer;

export const {setCurrentUser} = userSlice.actions;

export const selectCurrentUser = (state) => state.user.currentUser;

export const selectAllUsers = (state) => state.user.existingUsers;