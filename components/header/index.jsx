import React from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  styled,
  Stack,
  IconButton,
  Badge,
  Button,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';

// components
// import Profile from './Profile';
import { IconMenu } from '@tabler/icons-react';
import Menuitems from '../sidebar/MenuItems';
import { useRouter } from 'next/router';

const Header = ({ toggleMobileSidebar }) => {
  const route = useRouter();

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: 'none',
              xs: 'inline',
            },
          }}
        >
          <IconMenu width="20" height="20" />
        </IconButton>

        <Typography
          variant="h6"
          component={'h6'}
          sx={{
            color: 'black',
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          {
            Menuitems.find((item) => item?.activePaths.includes(route.pathname))
              ?.title
          }
        </Typography>
        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          {/* <Profile /> */}
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
