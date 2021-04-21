import { makeStyles, TextField, Button } from "@material-ui/core";
import styled from "styled-components";
import React from "react";

const useStyles = makeStyles({
  text: {
    color: "white",
    backgroundColor: "#fffff",
    width: "30vw",
    minHeight: "300px",
  },
  inputLabel: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "100%",
    color: "#ffff",
  },
});

const QueryInputRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #1E2B3E;
  padding: 16px;
  width: 775px;
  min-height: 300px;
  max-height: 400px;
  border-radius: 8px;
`;
/**
 * @interface IQueryInputProps
 * @field {e()=>void} handleChange - function to handle state of form 
 */
export interface IQueryInputProps {
    handleChange(event: React.ChangeEvent<HTMLInputElement>): any
}

const QueryInput = (props: IQueryInputProps) => {
  const classes = useStyles();
  return (
    <QueryInputRoot>
        <TextField
          className={classes.text}
          id="filled-textarea"
          label="Click To Input Your SQL Query..."
          placeholder="SQL Query"
          InputProps={{
            className: classes.text,
          }}
          InputLabelProps={{
            className: classes.inputLabel,
          }}
          multiline
          onChange={props.handleChange}
        />
    </QueryInputRoot>

  );
};

export default QueryInput;
