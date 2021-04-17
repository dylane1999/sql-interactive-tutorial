import React from "react";
import styled from "styled-components";
import EditorMenu, { IEditorMenuProps } from "../components/EditorMenu";
import Instructions, {IInstructionsProps } from "../components/Instructions"

export interface IInteractiveSqlPageProps {
    x: number
}

const Root = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const InteractiveSqlPage = (props: IInteractiveSqlPageProps) => {
  return <Root></Root>;
};

export default InteractiveSqlPage;
