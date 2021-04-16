import React, { useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { nanoid } from "nanoid";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor: "#3A3A3A",
  },
  paper: {
    backgroundColor: "#3A3A3A",
  },
  whiteText: {
    color: "#fff",
  },
});

const DataContainerRoot = styled.div`
  width: 100%;
  height: 100%;
`;

const getHeaderValues = (firstRow: Object): Array<string> => {
  let headerValues = [];
  for (const [key, value] of Object.entries(firstRow)) {
    headerValues.push(key);
  }
  return headerValues;
};

const getTableRowValues = (tableRow: Object): Array<string> => {
  let tableValues = [];
  for (const [key, value] of Object.entries(tableRow)) {
    tableValues.push(value);
  }
  return tableValues;
};

const GetTableRow = (row: Object) => {
  const tableValues = getTableRowValues(row)
  const classes = useStyles();
  return (
    <TableRow key={nanoid()}>
    {tableValues.map((value) => {
      return (
        <TableCell
          className={classes.whiteText}
          scope="row"
        >
          {value}
        </TableCell>
      );
    })}
  </TableRow>
  )
}

export interface IDataContainerProps {
  tableData: Array<any>;
}

const DataContainer = (props: IDataContainerProps) => {
  const classes = useStyles();
  const [headerArray, setHeaderArray] = useState(
    getHeaderValues(props.tableData[0])
  );
  const [TableValues, setTableValues] = useState<Array<string>>([]);

  return (
    <DataContainerRoot>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.whiteText}>
            {headerArray.map((header) => {
              return (
                <TableCell className={classes.whiteText}>{header}</TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.tableData.map((row)=> {
            return GetTableRow(row)
          })}
        </TableBody>
      </Table>
    </DataContainerRoot>
  );
};

export default DataContainer;

/**                             ioilfewiojeipwrtje4iotjerpigjersgjwerp'ogjertwgipyjertjerpitjpewrjtewrgrotertopertker[tero[tjpre]] */
