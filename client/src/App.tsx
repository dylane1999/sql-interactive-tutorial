import React from "react";
import incrementValue from "./middleware/Counter/incrementValue";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import InteractiveSqlPage from "./views/pages/InteractiveSqlPage"

let isCorrect = false

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.counter.currentValue);
  /** Alternate: const state = useSelector<RootState, number>(state => state.counter.currentValue); */
  function setCorrect(value: boolean){
    isCorrect = value
    console.log(isCorrect)
  }
  return (
    <>
    {!isCorrect === true
      ?<div className="App">
        <InteractiveSqlPage isCorrect={isCorrect} setCorrect={setCorrect}/>
      </div>
      : <></>
    }
    </>
  );
}

export default App;
