import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

//automatically creates identifiers for the actions
 const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment: (state) => {
            state.counter++;
        },
        decrement: (state) => {
            state.counter--;
        },
        increase: (state, action) => {
            state.counter += action.payload;
        },
        decrease: (state, action) => {
            state.counter -= action.payload;
        },
        toggleCounter: (state) => {
            state.showCounter = !state.showCounter;
        }
    }
});
//returns {type: 'some-auto-generated-string', payload: {}}
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;