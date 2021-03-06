import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import TableMUI from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ITableProps } from './table.types';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.primary,
      borderBottom: 'none',
    },
    body: {
      fontSize: 14,
      color: theme.palette.text.primary,
      borderBottom: 'none',
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.light,

      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  }),
)(TableRow);

function createData(id: string, name: string, calories: string | number, fat: number) {
  return { id, name, calories, fat };
}

const rows = [
  createData('1', 'Trening personalny', 60, 100),
  createData('2', 'Trening personalny', 90, 120),
  createData('3', 'Trening personalny x 10', 60, 800),
  createData('4', 'Rozpiska diety', '-', 150),
];

const useStyles = makeStyles({
  table: {
    // minWidth: 700,
  },
});

export const Table: React.FC<ITableProps> = ({}) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <TableMUI className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Usługa</StyledTableCell>
            <StyledTableCell align="right">Czas</StyledTableCell>
            <StyledTableCell align="right">Kwota</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat} zł</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </TableMUI>
    </TableContainer>
  );
};
