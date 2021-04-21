import React from "react";
import styled from "styled-components";

/**
 * @field instructionsText: string;
 * @field instructionsTitle: string;
 * @field isCorrect: boolean;
 */
export interface IInstructionsProps {
  instructionsText: string;
  instructionsTitle: string;
  isCorrect: boolean;
}

const InstructionsRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 16px;
  background-color: whitesmoke;
  width: 30vw;
  height: 400px;
`;

const InstructionsHeading = styled.h4`
  font-size: 16px;
  color: black;
  font-weight: 800px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const InstructionsText = styled.p`
  font-size: 16px;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Instructions = (props: IInstructionsProps) => {
  return (
    <InstructionsRoot>
        <InstructionsHeading>{props.instructionsTitle}</InstructionsHeading>
      <InstructionsText>{props.instructionsText}</InstructionsText>
    </InstructionsRoot>
  );
};

export default Instructions;
