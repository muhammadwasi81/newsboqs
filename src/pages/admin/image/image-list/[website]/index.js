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

const ImageList = () => {
    const routes = useRouter()
    function createData(name, imageID) {
        return { name, imageID };
    }

    const columns = [
        { id: 'name', label: 'Image' },
        { id: 'imageID', label: 'Image ID' },
    ];

    const rows = [
        createData('Image 10', 'HOL10'),
        createData('Image 2', 'HOL2'),
        createData('Image 6', 'HO6'),
        createData('Image 8'),
        createData('Image 4'),
    ];

    return (
        <Fragment>
            <Grid container spacing={2}>
                <Grid item md={12} >
                    <Paper sx={{ width: { md: 'calc(100vw - 350px)', sm: 'calc(100vw - 30px)', xs: 'calc(100vw - 40px)' }, overflow: 'auto' }}>
                        <Grid container padding={2}>
                            <Grid item md={12}>
                                <Typography variant='h6' component={'h6'} sx={{ fontSize: 18 }}>
                                    {routes.query?.website?.toUpperCase()}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item md={12}>
                    <CustomTable
                        rows={rows}
                        columns={columns}
                        maxHeight={550}
                        width={'100%'}
                    />
                </Grid>
            </Grid>
        </Fragment>
    )
}

ImageList.getLayout = function getLayout(page) {
    return <FullLayout>{page}</FullLayout>;
};

export default ImageList