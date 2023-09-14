import React, { Fragment, useState } from 'react';
import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { useRouter } from 'next/router';
import FullLayout from '../../../../components/layouts/fullLayout';
import { Languages } from '../../../../data';

const Sites = () => {
  const routes = useRouter();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    { id: '1', label: '', width: 150, span: 4 },
    ...Languages.map((item) => {
      return {
        id: item?.code,
        label: item?.name,
        width: item?.code === 'zh-cn' ? 130 : 100,
        align: 'left',
        span: 5,
      };
    }),
  ];

  const subColumns = [
    { id: 'Website', label: 'Website list', width: 150 },
    { id: 'site_url', label: 'site url', width: 150 },
    { id: 'logo', label: 'Logo', width: 150 },
    { id: 'favicon', label: 'Favicon', width: 150 },
    ...Languages.map((item) => {
      return {
        [item?.code]: [
          {
            id: item?.code + '-name',
            label: 'Site Name',
            width: 200,
            align: 'center',
          },
          {
            id: item?.code + '-title',
            label: 'Title',
            width: 200,
            align: 'center',
          },
          {
            id: item?.code + '-sub-title',
            label: 'Sub Title',
            width: 200,
            align: 'center',
          },
          {
            id: item?.code + '-description',
            label: 'Site Description',
            width: 200,
            align: 'center',
          },
          {
            id: item?.code + '-url',
            label: 'Site URL',
            width: 200,
            align: 'center',
          },
        ],
      };
    }),
  ];

  const createData = (
    Website,
    site_url,
    logo,
    favicon,
    name,
    title,
    subTitle,
    desc,
    url
  ) => {
    const row = {};
    row.Website = Website;
    row.site_url = site_url;
    row.logo = logo;
    row.favicon = favicon;
    Object.keys(Languages).forEach((key) => {
      row[Languages?.[key]?.code] = {
        [Languages?.[key]?.code + '-name']: name,
        [Languages?.[key]?.code + '-title']: title,
        [Languages?.[key]?.code + '-sub-title']: subTitle,
        [Languages?.[key]?.code + '-description']: desc,
        [Languages?.[key]?.code + '-url']: url,
      };
    });
    return row;
  };

  const rows = [
    createData('Holivoo', 'holivoo.com', '', '', '', '', '', '', ''),
    createData('Holivoo', 'holivoo.com', '', '', '', '', '', '', ''),
    createData('Holivoo', 'holivoo.com', '', '', '', '', '', '', ''),
    createData('Holivoo', 'holivoo.com', '', '', '', '', '', '', ''),
    createData('Holivoo', 'holivoo.com', '', '', '', '', '', '', ''),
    createData('Holivoo', 'holivoo.com', '', '', '', '', '', '', ''),
    createData('Holivoo', 'holivoo.com', '', '', '', '', '', '', ''),
    createData('Holivoo', 'holivoo.com', '', '', '', '', '', '', ''),
  ];

  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item md={12}>
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
            <Grid container padding={2} spacing={2}>
              <Grid item md={12} sx={{ display: 'flex', gap: '10px' }}>
                <Button
                  variant="contained"
                  disableElevation
                  color="primary"
                  sx={{
                    '&.MuiButton-contained': {
                      backgroundColor: '#5d87ff !important',
                    },
                    marginLeft: 'auto',
                    width: 150,
                    height: '100%',
                  }}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  disableElevation
                  color="primary"
                  sx={{
                    '&.MuiButton-contained': {
                      backgroundColor: '#5d87ff !important',
                    },
                    // marginLeft: 'auto',
                    width: 150,
                    height: '100%',
                  }}
                >
                  Update
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item md={12}>
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
            <TableContainer sx={{ maxHeight: 450, maxWidth: '100%' }}>
              <Table
                stickyHeader
                sx={{
                  '& .MuiTableHead-root': {
                    '& .MuiTableCell-root': {
                      color: '#fff',
                      fontSize: 14,
                      fontWeight: 600,
                      background: '#5d87ff',
                      border: '1px solid #fbfcfd',
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
                        colSpan={column.span}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    {subColumns.map((subColumn) =>
                      columns.map(
                        (column) =>
                          typeof subColumn?.[column?.id] === 'object' &&
                          subColumn?.[column?.id]?.map((item) => (
                            <TableCell
                              key={item.id + column?.id}
                              align={'left'}
                              style={{ top: 57, minWidth: item?.width }}
                            >
                              {item.label}
                            </TableCell>
                          ))
                        // :
                        // <TableCell
                        //     key={subColumn?.id}
                        //     align={'left'}
                        //     style={{ top: 57, minWidth: subColumn?.width }}
                        // >
                        //     {subColumn?.label}
                        // </TableCell>
                      )
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, i) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                          {columns.map((column) =>
                            subColumns?.map((subCol) =>
                              typeof subCol?.[column?.id] === 'object' ? (
                                subCol?.[column?.id]?.map((lug) => (
                                  <TableCell
                                    key={subCol?.id + lug?.id}
                                    align={column.align}
                                    width={column?.width}
                                  >
                                    {row?.[column.id]?.[lug?.id] || ''}
                                  </TableCell>
                                ))
                              ) : (
                                <TableCell key={subCol?.id} align={'left'}>
                                  {row?.[subCol?.id]}
                                </TableCell>
                              )
                            )
                          )}
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
        </Grid>
      </Grid>
    </Fragment>
  );
};

Sites.getLayout = function getLayout(page) {
  return <FullLayout>{page}</FullLayout>;
};

export default Sites;
