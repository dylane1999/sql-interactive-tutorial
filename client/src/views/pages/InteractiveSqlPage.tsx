import React, { useState, useEffect } from "react";
import styled from "styled-components";
import EditorMenu, { IEditorMenuProps } from "../components/EditorMenu";
import Instructions, {IInstructionsProps } from "../components/Instructions"
import InteractiveQuery, {IInteractiveQueryProps} from "../components/InteractiveQuery/index"
import { Button, makeStyles } from "@material-ui/core";

export interface IInteractiveSqlPageProps {
  isCorrect: boolean,
  setCorrect: any
}

const Root = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const InteractiveSqlPage = (props: IInteractiveSqlPageProps) => {
  const [CurrentQuery, setCurrentQuery] = useState<string>("");

  function setInstructionsText(){
    return "Select all of the People from the People table"
  }

  function setInstructionsTitle(){
    return "Challenge #1"
  }

  let expectedQuery = "SELECT * FROM People"

  function handleClick(){
    props.setCorrect(false)
    console.log(props.isCorrect)
    setInstructionsText()
  }

  useEffect(() => {
    if (CurrentQuery === expectedQuery) {
      props.setCorrect(true)
    }
    console.log(props.isCorrect)
    props.setCorrect(!props.isCorrect)
  })

  return (
  <Root>
    {!props.isCorrect
    ? <Instructions instructionsText={setInstructionsText()} instructionsTitle={setInstructionsTitle()} isCorrect={props.isCorrect}/>
    : <Button onClick={handleClick}>Next Challenge</Button>
    } 
    <InteractiveQuery currentQuery={setCurrentQuery}/>
    <button onClick={()=> console.log(props.isCorrect)}>Check</button>
  </Root>
  );
};

export default InteractiveSqlPage;
