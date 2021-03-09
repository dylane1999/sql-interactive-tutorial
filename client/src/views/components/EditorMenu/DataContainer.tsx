import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const DataContainerRoot = styled.div`
  width: 100%;
  height: 100%;
`;

export interface IDataContainerProps {
    tableHeadArray: Array<string>
    
}

const DataContainer = (props: IDataContainerProps) => {
  const classes = useStyles();

  return (
    <DataContainerRoot>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.whiteText}>
              <TableCell className={classes.whiteText}>Dessert (100g serving)</TableCell>
              <TableCell className={classes.whiteText} align="right">Calories</TableCell>
              <TableCell className={classes.whiteText} align="right">Fat&nbsp;(g)</TableCell>
              <TableCell className={classes.whiteText} align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell className={classes.whiteText} align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell className={classes.whiteText} component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell className={classes.whiteText} align="right">{row.calories}</TableCell>
                <TableCell className={classes.whiteText} align="right">{row.fat}</TableCell>
                <TableCell className={classes.whiteText} align="right">{row.carbs}</TableCell>
                <TableCell className={classes.whiteText} align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </DataContainerRoot>
  );
};

export default DataContainer;

/**                             ioilfewiojeipwrtje4iotjerpigjersgjwerp'ogjertwgipyjertjerpitjpewrjtewrgrotertopertker[tero[tjpre]] */
