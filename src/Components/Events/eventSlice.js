import demoEvents from "../../demoData/demoEvents";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    eventsArray: demoEvents
};

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        addEvent: (state, action) => {
            const newEvent = {
                id: state.eventsArray.length+1,
                ...action.payload
            };
            state.eventsArray.push(newEvent);
        }
    }
})

export const eventsReducer = eventsSlice.reducer;

export const { addEvent } = eventsSlice.actions;

export const SelectAllEvents = (state) => state.events.eventsArray;