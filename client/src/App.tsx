import React from "react";
import incrementValue from "./middleware/Counter/incrementValue";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.counter.currentValue);
  /** Alternate: const state = useSelector<RootState, number>(state => state.counter.currentValue); */
  return (
    <>
      <div className="App"> {state}</div>
      <button
        onClick={() => {
          dispatch(incrementValue(1));
        }}
      >
        click to increment
      </button>
    </>
  );
}

export default App;
