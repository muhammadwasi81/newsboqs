import React from 'react'
import FullLayout from '../../../../../../../components/layouts/fullLayout';
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material';
import { Languages } from '../../../../../../../data';
import { useRouter } from 'next/router';

const ArticleDetails = () => {
    const routes = useRouter()

    const horizontalHeaders = [
        ...(Languages.map(item => {
            return {
                id: item?.code,
                label: item?.name,
                width: item?.code === 'zh-cn' ? 130 : 100,
                align: 'center'
            }
        }))
    ];
    const verticalHeaders = [
        { id: 'articleID', label: 'Article ID' },
        { id: 'articleURL', label: 'Article URL' },
        { id: 2, label: 'Date publsihed' },
        { id: 3, label: 'Date last modified' },
        { id: 4, label: 'CategoryIDs' },
        { id: 5, label: 'Tags IDs' },
        { id: 'title', label: 'Title' },
        { id: 7, label: 'Featured image' },
        { id: 'subTitle', label: 'Main Subtitle' },
        { id: 9, label: 'Main Paragraph' },
        { id: 10, label: 'Subtitle 1 ' },
        { id: 11, label: 'Image 1' },
        { id: 12, label: 'Image source 1' },
        { id: 13, label: 'Paragraph 1' },
        { id: 14, label: 'Subtitle 2' },
    ];

    const data = {}
    Languages?.forEach((item, i) => {
        data[item?.code] = {
            articleID: `article${i + 1}${item?.code}`,
            title: `Title in ${item?.name}`,
            subTitle: <a href='/' target='_blank'>Article Title</a>
        }
    })

    return (
        <Grid container spacing={3}>
            <Grid item md={12}>
                <Paper>
                    <Grid container padding={2} spacing={2}>
                        <Grid item lg={6} md={4} sm={2}>
                            <Typography variant='h6' component={'h6'} sx={{ fontSize: 18 }}>
                                {routes.query?.website?.toUpperCase()}
                            </Typography>
                        </Grid>
                        <Grid item lg={6} md={8} sm={10} sx={{ display: 'flex', gap: '10px' }}>
                            <Button
                                variant="contained"
                                disableElevation
                                color="primary"
                                sx={{
                                    '&.MuiButton-contained': {
                                        backgroundColor: '#5d87ff !important',
                                    },
                                    width: 150,
                                    height: '40px',
                                    // margin: '5px',
                                    // marginLeft: 'auto',
                                }}>
                                Translate
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
                                    height: '40px',
                                    // margin: '5px'
                                }}>
                                Refine
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
                                    height: '40px',
                                    // margin: '5px'
                                }}>
                                Update
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item md={12}>
                <Paper sx={{ width: { md: 'calc(100vw - 350px)', sm: 'calc(100vw - 30px)', xs: 'calc(100vw - 40px)' }, overflow: 'auto' }}>
                    <TableContainer sx={{ maxHeight: 500, maxWidth: '100%' }}>
                        <Table
                            stickyHeader
                            sx={{
                                '& .MuiTableHead-root': {
                                    '& .MuiTableCell-root': {
                                        color: '#fff',
                                        fontSize: 14,
                                        fontWeight: 600,
                                        background: '#5d87ff',
                                        border: 'none',

                                        '&:nth-child(1)': {
                                            left: 0,
                                            zIndex: 3
                                        }
                                    }
                                },

                                '& .MuiTableBody-root': {
                                    '& .MuiTableCell-root': {
                                        color: '#5A6A85',
                                        fontSize: 14,
                                        fontWeight: 400,
                                        border: 'none',

                                        '&:nth-child(1)': {
                                            background: '#5d87ff',
                                            color: '#fff',
                                            fontWeight: 600,
                                            position: 'sticky',
                                            left: 0,
                                        }
                                    }
                                }
                            }}
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ minWidth: 200 }}></TableCell>
                                    {horizontalHeaders.map((header) => (
                                        <TableCell
                                            key={header?.id}
                                            style={{ minWidth: header?.width }}
                                            align={header?.align}
                                        >
                                            {header?.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {verticalHeaders.map((verticalHeader, rowIndex) => (
                                    <TableRow key={verticalHeader?.id}>
                                        <TableCell>
                                            {verticalHeader?.label}
                                        </TableCell>
                                        {horizontalHeaders.map((horizontalHeader, colIndex) => (
                                            <TableCell key={`${verticalHeader?.id}-${horizontalHeader?.id}`}>
                                                {data?.[horizontalHeader?.id]?.[verticalHeader?.id]}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
        </Grid>

    )
}

ArticleDetails.getLayout = function getLayout(page) {
    return <FullLayout>{page}</FullLayout>;
};

export default ArticleDetails