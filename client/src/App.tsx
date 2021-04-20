import React, { useState } from "react";
import incrementValue from "./middleware/Counter/incrementValue";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import InteractiveSqlPage from "./views/pages/InteractiveSqlPage";



function App() {
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  /**
   * function setCorrect()
   * sets the isCorrect state -> true
   */
  function setCorrect() {
    setIsCorrect(true);
  }
  return (
    <>
        <div className="App">
          <InteractiveSqlPage isCorrect={isCorrect} setCorrect={setCorrect} expectedQuery={"SELECT * FROM People"}/>
        </div>
    </>
  );
}

export default App;
