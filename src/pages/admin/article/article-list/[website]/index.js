import React, { Fragment } from 'react'
import FullLayout from '../../../../../../components/layouts/fullLayout';
import CustomTable from '../../../../../../components/table';
import { Languages } from '../../../../../../data';
import { Button, Grid, InputBase, Paper, TextField, Typography } from '@mui/material';
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

const ArticleList = () => {
    const routes = useRouter()
    function createData(title, articleID, publishedAt, rest) {
        return { title, articleID, publishedAt, ...rest };
    }

    const columns = [
        { id: 'title', label: 'Title', width: 150 },
        { id: 'articleID', label: 'Article ID', width: 100, align: 'center' },
        { id: 'publishedAt', label: 'Date published', width: 150, align: 'center' },
        ...(Languages.map(item => {
            return {
                id: item?.code,
                label: item?.name,
                width: item?.code === 'zh-cn' ? 130 : 100,
                align: 'center'
            }
        }))
    ];

    const rows = [
        createData('Articles 10', 'HOL10', '05-09-2023', { en: 'Yes' }),
        createData('Articles 2', 'HOL2', '25-08-2023', { ja: 'Yes' }),
        createData('Articles 6', 'HO6', '02-08-2023', { ['zh-cn']: 'Yes' }),
        createData('Articles 8', 'HOL8', '20-07-2023', { es: 'Yes' }),
        createData('Articles 4', 'HOL4', '14-06-2023', { de: 'Yes' }),
    ];

    return (
        <Fragment>
            <Grid container spacing={2}>
                <Grid item md={12} >
                    <Paper>
                        <Grid container padding={2} spacing={2}>
                            <Grid item md={12}>
                                <Typography variant='h6' component={'h6'} sx={{ fontSize: 18 }}>
                                    {routes.query?.website?.toUpperCase()}
                                </Typography>
                            </Grid>
                            <Grid item md={4}>
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search articles…"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                            </Grid>
                            <Grid item md={4}>
                                <TextField type='date' />
                            </Grid>
                            <Grid item md={4} sx={{ display: 'flex' }}>
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
                                    Add New
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item md={12}>
                    <CustomTable
                        rows={rows}
                        columns={columns}
                        maxHeight={550}
                        width={'calc(100vw - 25px)'}
                        linkCell='title'
                        queryId='articleID'
                        path={`/admin/article/article-list/${routes.query?.website}/article-details/`}
                    />
                </Grid>
            </Grid>
        </Fragment>
    )
}

ArticleList.getLayout = function getLayout(page) {
    return <FullLayout>{page}</FullLayout>;
};

export default ArticleList