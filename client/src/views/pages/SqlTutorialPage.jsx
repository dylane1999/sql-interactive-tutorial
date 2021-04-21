import React, { useEffect, useState } from "react";
import InteractiveSql from "../components/InteractiveSql";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const TutorialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TutorialHeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 66%;
`;

const Spacing = styled.div`
  padding: 16px;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TutorialHeading = styled.h4`
  font-size: 16px;
  color: black;
  font-weight: 800px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

function App() {
  const [isCorrect, setIsCorrect] = useState(false);

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
    "Select all properties from the properties table",
    "Select the firstname from every person in the People table",
    "Select the firstname and lastname from every person in the People table",
    "Select the firstname from every person in the People table who is over the age of 50",
    "Select the firstname, lastname, address, and city of every person. Hint: Join the tables on the propertyID",
    "Select the firstname, lastname, address, and city of every person where the city is Los angeles. Hint: check where Properties.City is Los Angeles)",
    "Select the firstname, lastname, address, and city of every person where the city is Los angeles or San Francisco. Hint: check where Properties.City is Los Angeles or San Francisco)",
    "Select the firstname, lastname, address, and city of every person where the city is Los angeles or San Francisco and that persons age is above 50 years.",
  ];

  const queryTitles = [
    "Challenge #1",
    "Challenge #2",
    "Challenge #3",
    "Challenge #4",
    "Challenge #5",
    "Challenge #6",
    "Challenge #7",
    "Challenge #8",
    "Challenge #9",
  ];

  function getCurrentIndex() {
    const currentIndex = parseInt(getPersistedState());
    if (currentIndex == null || currentIndex == undefined) {
      return 0;
    }
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
    setIsCorrect(false);
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

  const resetProgress = () => {
    localStorage.clear();
    setIndexState(getCurrentIndex());
  };

  const [indexState, setIndexState] = useState(getCurrentIndex());

  return (
    <>
      <TutorialWrapper>
        <TutorialHeadingWrapper>
          <div>
            <RowWrapper>
              <TutorialHeading>
                {queryTitles[indexState]} status:
              </TutorialHeading>
              <Spacing />
              {isCorrect ? (
                <RowWrapper>
                  <CheckCircleIcon /> <p> Correct!</p>
                </RowWrapper>
              ) : (
                <RowWrapper>
                  <CancelIcon /> <p> Incorrect</p>
                </RowWrapper>
              )}
            </RowWrapper>
          </div>
          <div>
            <TutorialHeading>
              {" "}
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => resetProgress()}
              >
                Reset Progress
              </Button>
            </TutorialHeading>
          </div>
        </TutorialHeadingWrapper>
        <InteractiveSql
          isCorrect={isCorrect}
          setCorrect={setCorrect}
          expectedQuery={expectedQueriesArray[indexState]}
          instructionsTitle={queryTitles[indexState]}
          instructionsText={queryInstructions[indexState]}
          handleNextPage={getNextPage}
        />
      </TutorialWrapper>
    </>
  );
}

export default App;
