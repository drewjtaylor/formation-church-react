import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { eventsReducer } from './Components/Events/eventSlice';
import { userReducer } from './user/userSlice';


export const store = configureStore({
    reducer: {
        events: eventsReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat([logger])
    }
});