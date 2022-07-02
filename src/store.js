import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { eventsReducer } from './Components/Events/eventSlice';


export const store = configureStore({
    reducer: {
        events: eventsReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat([logger])
    }
});