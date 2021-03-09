import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { increment } from "../../actions/counter/counterActions";
import { IIncrementAction } from "../../actions/counter/counterTypes";

function incrementValue1(n: number) {
  return (dispatch: Dispatch) => {
    const payload: IIncrementAction = {
      amount: n,
    };

    return dispatch(increment(payload));
  };
}

function incrementValue(n: number) {
  // Invert control!
  // Return a function that accepts `dispatch` so we can dispatch later.
  // Thunk middleware knows how to turn thunk async actions into actions.

  return function (dispatch: Dispatch) {
    const payload: IIncrementAction = {
        amount: n,
      };
    return dispatch(increment(payload));
  };
}

export default incrementValue;
