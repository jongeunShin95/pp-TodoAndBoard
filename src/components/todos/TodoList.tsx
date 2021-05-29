import React, { useState } from 'react';
import { Todo, TodosState } from '../../modules/todos';

import { makeStyles, ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

type TodoListProps = {
    todos: Todo[];
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
}

type Column = {
    id: 'id' | 'text' | 'done' | 'remove';
    label: string;
    minWidth?: number;
    align?: 'right';
}
  
const columns: Column[] = [
    { id: 'id', label: 'ID', minWidth: 170 },
    { id: 'text', label: 'TEXT', minWidth: 100 },
    {
      id: 'done',
      label: 'DONE',
      minWidth: 170,
      align: 'right'
    },
    {
      id: 'remove',
      label: 'REMOVE',
      minWidth: 170,
      align: 'right'
    },
];
  
type Data = {
    id: number;
    text: string;
    done: boolean;
    remove: number;
}

function createData(id: number, text: string, done: boolean, remove: number): Data {
    return { id, text, done, remove };
}
  
const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 385,
    },
});

function TodoList({ todos, onToggle, onRemove }: TodoListProps) {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const rows: Data[] = [];

    const handleSetRows = (todos: TodosState) => {
        todos.map(todo => (
            rows.push(createData(todo.id, todo.text, todo.done, todo.id))
        ))
    }

    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    return (
        <ThemeProvider theme={unstable_createMuiStrictModeTheme()}>
          <TableContainer className={classes.container}>
            { handleSetRows(todos) }
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                        if (column.id === "done") {
                            return (
                                <TableCell key={column.id} align={column.align}>
                                    {row[column.id] ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon onClick={() => onToggle(row["id"])} />}
                                </TableCell>
                            )
                        }
                        if (column.id === "remove") {
                            return (
                                <TableCell key={column.id} align={column.align}>
                                    <DeleteOutlineIcon onClick={() => onRemove(row["remove"])} />
                                </TableCell>
                            )
                        }
                        return (
                          <TableCell key={column.id}>
                            {row[column.id]}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </ThemeProvider>
      );
}

export default TodoList;