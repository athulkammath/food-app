import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
    isChecked: boolean;
}

const initialState: CounterState = {
    value: 0,
    isChecked: false,
};

// Helper to maintain invariant: isChecked must be false if value is 0
const enforceBusinessRules = (state: CounterState) => {
    if (state.value === 0) {
        state.isChecked = false;
    }
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },

        decrement: (state) => {
            if (state.value > 0) {
                state.value -= 1;
                enforceBusinessRules(state);
            }
        },
        setIsChecked: (state, action: PayloadAction<boolean>) => {
            state.isChecked = action.payload;
        },

    },
});

// actions
export const { increment, decrement, setIsChecked } = counterSlice.actions;

// reducer
export default counterSlice.reducer;
