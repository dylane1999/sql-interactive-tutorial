import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { increment } from "../actions/counter/counterActions";
import { IIncrementAction } from "../actions/counter/counterTypes"

interface CounterState {
  currentValue: number;
}

const initialState: CounterState = {
  currentValue: 0,
};

/**
 * @Reducer counterReducer
 * @case increment - adds the incremented payload to the store.currentvalue
 */
const counterReducer = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state: CounterState, {payload}: PayloadAction<IIncrementAction>) => {
    state.currentValue += payload.amount;
  });
});


export default counterReducer
