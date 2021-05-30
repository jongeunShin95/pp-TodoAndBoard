import React, { useState } from 'react';
import { Board, BoardsState } from '../../modules/boards';

import { makeStyles, unstable_createMuiStrictModeTheme, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { TablePagination } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import BoardModify from './BoardMofify';
import Button from '@material-ui/core/Button';

type ModifyProps = {
  id: number;
  title: string;
  content: string;
}

type BoardListProps = {
    boards: Board[];
    onRemove: (id: number) => void;
    onModify: ({ id, title, content }: ModifyProps) => void;
}

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 401,
    },
});

const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
});

function createData(
    id: number,
    title: string,
    content: string,
    created_at: string,
    remove: number,
) {
    return {
        id,
        title,
        content,
        created_at,
        remove
    };
}

type Data = {
    id: number,
    title: string,
    content: string,
    created_at: string,
    remove: number,
}

function Row(props: { 
  row: ReturnType<typeof createData>, 
  onRemove: (id: number) => void,
  handleSetModify: (curId: number) => void
}) {
    const { row, onRemove, handleSetModify } = props;
    const [open, setOpen] = useState(false);
    const classes = useRowStyles();
  
    return (
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.id}
          </TableCell>
          <TableCell>{row.title}</TableCell>
          <TableCell>{row.created_at}</TableCell>
          <TableCell><DeleteOutlineIcon onClick={() => onRemove(row.remove)} /></TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Content
                  <Button onClick={() => handleSetModify(row.id - 1)}>수정하기</Button>
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableBody>
                      <TableRow key={row.id}>
                        <TableCell>{row.content}</TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
}

function BoardList({ boards, onRemove, onModify }: BoardListProps) {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [board, setBoard] = useState<Board>({ id: 0, title: '', content: '', created_at: ''});
    const [modify, setModify] = useState(false); // 수정페이지인지 아닌지
    const rows: Data[] = [];

    const handleSetRows = (boards: BoardsState) => {
        boards.map(board => (
            rows.push(createData(board.id, board.title, board.content, board.created_at, board.id))
        ))
    }

    const handleSetModify = (curId: number) => {
      setBoard({
        id: rows[curId].id,
        title: rows[curId].title,
        content: rows[curId].content,
        created_at: rows[curId].created_at
      });
      setModify(true);
    }

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    
      const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    if (modify) return <BoardModify board={board} onModify={onModify} />;
    return (
        <ThemeProvider theme={unstable_createMuiStrictModeTheme()}>
            { handleSetRows(boards) }
            <TableContainer className={classes.container}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                        <TableCell />
                        <TableCell>ID</TableCell>
                        <TableCell>TITLE</TableCell>
                        <TableCell>CREATED_AT</TableCell>
                        <TableCell>REMOVE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                          <Row key={row.id} row={row} onRemove={onRemove} handleSetModify={handleSetModify} />
                        ))}
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
    )
}

export default BoardList;