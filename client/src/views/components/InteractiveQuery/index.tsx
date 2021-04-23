import React, { useState } from "react";
import styled from "styled-components";
import EditorMenu, { IEditorMenuProps } from "../EditorMenu";
import QueryInput, { IQueryInputProps } from "../QueryInput";
import { properties, people } from "./SqlDatasets";
import { Button, makeStyles } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles({
  button: {},
});
const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;
const TableWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 16px;
`;

const Spacing = styled.div`
  padding: 16px;
`;

export interface IInteractiveQueryProps {
  currentQuery: any
}

const InteractiveQuery = (props: IInteractiveQueryProps) => {
  const [SqlQuery, setSqlQueryuery] = useState<string>("");
  const [SqlResult, setSqlResult] = useState<Array<any>>(["", "", ""]);
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSqlQueryuery(event.target.value);
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await makeQuery();
    console.log("submitted");
  }

  async function makeQuery() {
    try {
      const response = await axios.post("http://backend:5000/query", {
        query: SqlQuery,
      });
      console.log(response);
      setSqlResult(response.data)
      props.currentQuery(SqlQuery)
    } catch (error) {
      console.error(error);
      alert("the query was unsuccesful or incorrect");
    }
  }

  return (
    <Root>
      <form onSubmit={handleSubmit}>
        <QueryInput handleChange={handleChange} />
        <TableWrapper>
          <Button type="submit" variant="contained" color="primary">
            Submit Query
          </Button>
          <Spacing />
          <EditorMenu
            tabsArray={["Resulting Query", "People", "Properties"]}
            contentArray={[SqlResult, people, properties]}
          ></EditorMenu>
        </TableWrapper>
      </form>
    </Root>
  );
};

export default InteractiveQuery;
