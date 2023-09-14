import React from 'react';
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
  Grid,
  Card,
} from '@mui/material';
import Link from 'next/link';
import { styled } from '@mui/material';
import CustomTextField from '../../../../components/forms/CustomTextField';
import Logo from '../../../../components/logo';
import BlankLayout from '../../../../components/layouts/BlankLayout';

const LinkStyled = styled(Link)(() => ({
  height: '70px',
  width: '180px',
  overflow: 'hidden',
  display: 'block',
}));

const AuthLogin = () => (
  <Box
    sx={{
      position: 'relative',
      backgroundColor: '#fff',
      '&:before': {
        content: '""',
        background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite',
        position: 'absolute',
        height: '100%',
        width: '100%',
        opacity: '0.3',
      },
    }}
  >
    <Grid
      container
      spacing={0}
      justifyContent="center"
      sx={{ height: '100vh' }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        lg={4}
        xl={3}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Card
          elevation={9}
          sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }}
        >
          <Box display="flex" alignItems="center" justifyContent="center">
            <Logo />
          </Box>

          <Stack>
            <Box>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                component="label"
                htmlFor="username"
                mb="5px"
              >
                Email
              </Typography>
              <CustomTextField variant="outlined" fullWidth />
            </Box>
            <Box mt="25px">
              <Typography
                variant="subtitle1"
                fontWeight={600}
                component="label"
                htmlFor="password"
                mb="5px"
              >
                Password
              </Typography>
              <CustomTextField type="password" variant="outlined" fullWidth />
            </Box>
            <Stack
              justifyContent="space-between"
              direction="row"
              alignItems="center"
              my={2}
            >
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Remeber this Device"
                />
              </FormGroup>
              <Typography
                component={Link}
                href="/"
                fontWeight="500"
                sx={{
                  textDecoration: 'none',
                  color: 'primary.main',
                }}
              >
                Forgot Password ?
              </Typography>
            </Stack>
          </Stack>
          <Box>
            <Button
              color="primary"
              variant="contained"
              size="large"
              fullWidth
              onClick={() => localStorage.setItem('token', true)}
              component={Link}
              href="/admin/article"
              type="submit"
            >
              Sign In
            </Button>
          </Box>
        </Card>
      </Grid>
    </Grid>
  </Box>
);

AuthLogin.getLayout = function getLayout(page) {
  return <BlankLayout>{page}</BlankLayout>;
};

export default AuthLogin;
