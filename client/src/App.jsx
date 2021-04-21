import React, { useEffect, useState } from "react";
import incrementValue from "./middleware/Counter/incrementValue";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import InteractiveSqlPage from "./views/pages/InteractiveSqlPage";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

function App() {
  const [isCorrect, setIsCorrect] = useState(false);

  const [indexState, setIndexState] = useState(0);

  const setPersistedState = (state) => {
    localStorage.setItem("index", state);
  };

  const getPersistedState = () => {
    if (localStorage.getItem("index") === null) {
      return "0";
    } else {
      return localStorage.getItem("index");
    }
  };

  const expectedQueriesArray = [
    "SELECT * FROM People",
    "SELECT * FROM Properties",
    "SELECT FirstName FROM People",
    "SELECT FirstName, LastName FROM People",
    "SELECT FirstName, LastName FROM People WHERE Age > 50",
    "SELECT People.FirstName, People.LastName, Properties.Adddress, Properties.City FROM People LEFT JOIN Properties ON People.PropertyId=Properties.PropertyId",
    'SELECT People.FirstName, People.LastName, Properties.Adddress, Properties.City FROM People RIGHT JOIN Properties ON People.PropertyId=Properties.PropertyId WHERE Properties.City = "Los Angeles"',
    'SELECT People.FirstName, People.LastName, Properties.Adddress, Properties.City FROM People RIGHT JOIN Properties ON People.PropertyId=Properties.PropertyId WHERE Properties.City in ("Los Angeles", "San Francisco")',
    'SELECT People.FirstName, People.LastName, Properties.Adddress, Properties.City FROM People RIGHT JOIN Properties ON People.PropertyId=Properties.PropertyId WHERE Properties.City in ("Los Angeles", "San Francisco") AND People.Age < 50',
  ];

  const queryInstructions = [
    "Select all the people from the people table",
    "SELECT * FROM Properties",
    "SELECT FirstName FROM People",
    "SELECT FirstName, LastName FROM People",
    "SELECT FirstName, LastName FROM People WHERE Age > 50",
    "SELECT People.FirstName, People.LastName, Properties.Adddress, Properties.City FROM People LEFT JOIN Properties ON People.PropertyId=Properties.PropertyId",
    'SELECT People.FirstName, People.LastName, Properties.Adddress, Properties.City FROM People RIGHT JOIN Properties ON People.PropertyId=Properties.PropertyId WHERE Properties.City = "Los Angeles"',
    'SELECT People.FirstName, People.LastName, Properties.Adddress, Properties.City FROM People RIGHT JOIN Properties ON People.PropertyId=Properties.PropertyId WHERE Properties.City in ("Los Angeles", "San Francisco")',
    'SELECT People.FirstName, People.LastName, Properties.Adddress, Properties.City FROM People RIGHT JOIN Properties ON People.PropertyId=Properties.PropertyId WHERE Properties.City in ("Los Angeles", "San Francisco") AND People.Age < 50',
  ];

  const queryTitles = [
    "Challenge #1",
    "SELECT * FROM Properties",
    "SELECT FirstName FROM People",
    "SELECT FirstName, LastName FROM People",
    "SELECT FirstName, LastName FROM People WHERE Age > 50",
    "SELECT People.FirstName, People.LastName, Properties.Adddress, Properties.City FROM People LEFT JOIN Properties ON People.PropertyId=Properties.PropertyId",
    'SELECT People.FirstName, People.LastName, Properties.Adddress, Properties.City FROM People RIGHT JOIN Properties ON People.PropertyId=Properties.PropertyId WHERE Properties.City = "Los Angeles"',
    'SELECT People.FirstName, People.LastName, Properties.Adddress, Properties.City FROM People RIGHT JOIN Properties ON People.PropertyId=Properties.PropertyId WHERE Properties.City in ("Los Angeles", "San Francisco")',
    'SELECT People.FirstName, People.LastName, Properties.Adddress, Properties.City FROM People RIGHT JOIN Properties ON People.PropertyId=Properties.PropertyId WHERE Properties.City in ("Los Angeles", "San Francisco") AND People.Age < 50',
  ];

  function getCurrentIndex() {
    const currentIndex = parseInt(getPersistedState());
    return currentIndex;
  }

  function getNextPage() {
    let currentIndex = parseInt(getPersistedState());
    if (currentIndex <= expectedQueriesArray.length) {
      currentIndex += 1;
    } else {
      currentIndex = 0;
    }
    setPersistedState(currentIndex.toString());
    setIsCorrect(false)
  }

  /**
   * function setCorrect()
   * sets the isCorrect state -> true
   */
  function setCorrect() {
    setIsCorrect(true);
  }

  function setIncorrect() {
    setIsCorrect(false);
  }
  console.log("indexState", getPersistedState());

  useEffect(() => {
    console.log(isCorrect, "iscorrect");
    console.log("indexState", getPersistedState());
    setIndexState(getCurrentIndex());
  }, [isCorrect]);

  return (
    <>
      <div className="App">
        <InteractiveSqlPage
          isCorrect={isCorrect}
          setCorrect={setCorrect}
          expectedQuery={expectedQueriesArray[indexState]}
          instructionsTitle={queryTitles[indexState]}
          instructionsText={queryInstructions[indexState]}
          handleNextPage={getNextPage}
        />
      </div>
    </>
  );
}

export default App;
