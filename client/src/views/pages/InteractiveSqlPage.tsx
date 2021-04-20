import React, { useState, useEffect } from "react";
import styled from "styled-components";
import EditorMenu, { IEditorMenuProps } from "../components/EditorMenu";
import Instructions, { IInstructionsProps } from "../components/Instructions";
import InteractiveQuery, {
  IInteractiveQueryProps,
} from "../components/InteractiveQuery/index";
import { Button, makeStyles } from "@material-ui/core";

/**
 * @interface IInteractiveSqlPageProps
 * @field isCorrect: boolean;
 * @field setCorrect: any;
 * @field expectedQuery: string
 */
export interface IInteractiveSqlPageProps {
  isCorrect: boolean;
  setCorrect: any;
  expectedQuery: string
}

const Root = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 16px;
`;

const InstructionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InteractionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  padding: 56px;
`;

const Spacing = styled.div`
  padding: 16px;
`;

const styles = makeStyles({
  button: {
    backgroundColor: "redd",
  },
});

const InteractiveSqlPage = (props: IInteractiveSqlPageProps) => {
  const [CurrentQuery, setCurrentQuery] = useState<string>("");

  function setInstructionsText() {
    return "Select all of the People from the People table";
  }

  function setInstructionsTitle() {
    return "Challenge #1";
  }

  let expectedQuery = "SELECT * FROM People";

  function handleClick() {
    props.setCorrect(false);
    console.log(props.isCorrect);
    setInstructionsText();
  }

  useEffect(() => {
    if (CurrentQuery === expectedQuery) {
      console.log(CurrentQuery, "current query")
      props.setCorrect(true);
    }
    return () => {
      /** cleans up the effect by setting to the default -> false */
      props.setCorrect(false)
    }

  }, [CurrentQuery]);


  return (
    <Root>
      <InstructionsWrapper>
        <Instructions
          instructionsText={setInstructionsText()}
          instructionsTitle={setInstructionsTitle()}
          isCorrect={props.isCorrect}
        />
        {props.isCorrect && (
          <>
            <Spacing />
            <Button variant="contained" color="secondary" onClick={handleClick}>
              Next Challenge
            </Button>
          </>
        )}
      </InstructionsWrapper>
      <InteractionsWrapper>
        <InteractiveQuery currentQuery={setCurrentQuery} />
        <ButtonWrapper>
        </ButtonWrapper>
      </InteractionsWrapper>
    </Root>
  );
};

export default InteractiveSqlPage;
