import React, { Fragment, useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import Link from 'next/link';

const CustomTable = ({
  width,
  maxHeight,
  columns,
  rows,
  path,
  linkCell,
  queryId,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Fragment>
      <Paper
        sx={{
          width: {
            md: 'calc(100vw - 350px)',
            sm: 'calc(100vw - 30px)',
            xs: 'calc(100vw - 40px)',
          },
          overflow: 'auto',
        }}
      >
        <TableContainer sx={{ maxHeight: maxHeight, maxWidth: '100%' }}>
          <Table
            stickyHeader
            sx={{
              '& .MuiTableHead-root': {
                '& .MuiTableCell-root': {
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 600,
                  background: '#5d87ff',
                },
              },

              '& .MuiTableBody-root': {
                '& .MuiTableCell-root': {
                  color: '#5A6A85',
                  fontSize: 14,
                  fontWeight: 400,
                },
              },
            }}
          >
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column?.align}
                    style={{ minWidth: column?.width }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, i) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                      {columns.map((column) => {
                        const value = row[column.id] ? row[column.id] : '-';
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            width={column?.width}
                          >
                            {column.id === linkCell ? (
                              <Link
                                href={`${path}${
                                  row?.[queryId]?.toLowerCase() ??
                                  value.toLowerCase()
                                }`}
                              >
                                {value}
                              </Link>
                            ) : (
                              value
                            )}
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
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Fragment>
  );
};

export default CustomTable;
