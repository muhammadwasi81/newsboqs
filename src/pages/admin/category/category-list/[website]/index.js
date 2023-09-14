import React, { Fragment, useState } from 'react'
import FullLayout from '../../../../../../components/layouts/fullLayout';
import CustomTable from '../../../../../../components/table';
import { Languages } from '../../../../../../data';
import { Button, Grid, InputBase, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    border: '1px solid #5A6A85',
    position: 'relative',
    borderRadius: 8,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    '&:focus': {
        border: '1px solid red',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        // marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
        fill: '#5A6A85'
    }
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    height: 50,
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        // [theme.breakpoints.up('md')]: {
        //     // width: '20ch',
        // },
    },
}));

const CategoryList = () => {
    const routes = useRouter()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // function createData(title, articleID, publishedAt, rest) {
    //     return { title, articleID, publishedAt, ...rest };
    // }

    const columns = [
        { id: 'empty', label: '', width: 150 },
        ...(Languages.map(item => {
            return {
                id: item?.code,
                label: item?.name,
                width: item?.code === 'zh-cn' ? 130 : 100,
                align: 'left',
                span: 6
            }
        }))
    ];

    const subColumns = [
        ...(Languages.map(item => {
            return {
                [item?.code]: [
                    {
                        id: item?.code + '-name',
                        label: 'Category Name',
                        width: 200,
                        align: 'center',
                    },
                    {
                        id: item?.code + '-sub-title',
                        label: 'Category sub title',
                        width: 200,
                        align: 'center',
                    },
                    {
                        id: item?.code + '-url',
                        label: 'Category URL',
                        width: 200,
                        align: 'center',
                    },
                    {
                        id: item?.code + '-featured-image',
                        label: 'Category Featured Image',
                        width: 250,
                        align: 'center',
                    },
                    {
                        id: item?.code + '-id',
                        label: 'Category ID',
                        width: 200,
                        align: 'center',
                    },
                    {
                        id: item?.code + '-description',
                        label: 'Category Description',
                        width: 200,
                        align: 'center',
                    },
                ]
            }
        }))
    ];

    const createData = (sharedId, name, subTitle, url, image, id, desc) => {
        const row = {};
        row.sharedId = sharedId
        Object.keys(Languages).forEach(key => {
            row[Languages?.[key]?.code] = {
                [Languages?.[key]?.code + '-name']: name,
                [Languages?.[key]?.code + '-sub-title']: subTitle,
                [Languages?.[key]?.code + '-url']: url,
                [Languages?.[key]?.code + '-featured-image']: image,
                [Languages?.[key]?.code + '-id']: id,
                [Languages?.[key]?.code + '-description']: desc,
            }
        })
        return row
    }

    const rows = [
        createData('CATHOL1', 'Lifestyle', 'Sub Title', "", 'No IMG', 'HOLEN01', 'N/A'),
        createData('REGE', 'Lifestyle', 'Sub Title', "", 'IMG', 'HOLEN01', 'N/A'),
        createData('CATHOL1', 'Lifestyle', 'Sub Title', "", 'No IMG', 'HOLEN01', 'N/A'),
        createData('RGEGEG', 'Lifestyle', 'Sub Title', "", 'No IMG', 'HOLEN01', 'N/A'),
        createData('CATHOL1', 'Lifestyle', 'Sub Title', "", 'IMG', 'HOLEN01', 'N/A'),
        createData('CATHOL1', 'Lifestyle', 'Sub Title', "", 'No IMG', 'HOLEN01', 'N/A'),
        createData('CBGBNYATHOL1', 'Lifestyle', 'Sub Title', "", 'No IMG', 'HOLEN01', 'N/A'),
        createData('CATHOL1', 'Lifestyle', 'Sub Title', "", 'No IMG', 'HOLEN01', 'N/A'),
        createData('CATYTHOL1', 'Lifestyle', 'Sub Title', "", 'No IMG', 'HOLEN01', 'N/A'),
        createData('CATYUKHOL1', 'Lifestyle', 'Sub Title', "", 'IMG', 'HOLEN01', 'N/A'),
        createData('CATIKHOL1', 'Lifestyle', 'Sub Title', "", 'No IMG', 'HOLEN01', 'N/A'),
    ];

    return (
        <Fragment>
            <Grid container spacing={2}>
                <Grid item md={12} >
                    <Paper>
                        <Grid container padding={2} spacing={2}>
                            <Grid item md={4}>
                                <Typography variant='h6' component={'h6'} sx={{ fontSize: 18 }}>
                                    {routes.query?.website?.toUpperCase()}
                                </Typography>
                            </Grid>
                            <Grid item md={8} sx={{ display: 'flex', gap: '10px' }}>
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
                                        height: '100%'
                                    }}>
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
                                        height: '100%'
                                    }}>
                                    Update
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item md={12}>
                    <Paper sx={{ width: { md: 'calc(100vw - 350px)', sm: 'calc(100vw - 30px)', xs: 'calc(100vw - 40px)' }, overflow: 'auto' }}>
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
                                            border: '1px solid #fbfcfd'
                                        }
                                    },

                                    '& .MuiTableBody-root': {
                                        '& .MuiTableCell-root': {
                                            color: '#5A6A85',
                                            fontSize: 14,
                                            fontWeight: 400
                                        }
                                    }
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
                                        <TableCell
                                            align={'left'}
                                            style={{ top: 57, minWidth: 200 }}
                                        >
                                            Shared category ID
                                        </TableCell>
                                        {subColumns.map((subColumn) =>
                                            columns.map((column) =>
                                                subColumn?.[column?.id]?.map(item => (
                                                    <TableCell
                                                        key={item.id}
                                                        align={'left'}
                                                        style={{ top: 57, minWidth: item?.width }}
                                                    >
                                                        {item.label}
                                                    </TableCell>
                                                ))
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
                                                    <TableCell align={'left'}>
                                                        {row?.sharedId}
                                                    </TableCell>
                                                    {columns.map(column =>
                                                        subColumns?.map(subCol =>
                                                            subCol?.[column?.id]?.map(lug =>
                                                                <TableCell
                                                                    key={column?.id + lug?.id}
                                                                    align={column.align}
                                                                    width={column?.width}
                                                                >
                                                                    {row?.[column.id]?.[lug?.id] || ''}
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
        </Fragment >
    )
}

CategoryList.getLayout = function getLayout(page) {
    return <FullLayout>{page}</FullLayout>;
};

export default CategoryList