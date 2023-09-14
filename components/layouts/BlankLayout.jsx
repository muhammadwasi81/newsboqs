import withAuth from '@/HOC';
import { Box } from '@mui/material';

const BlankLayout = ({ children }) => {
  return <Box>{children}</Box>;
};

export default withAuth(BlankLayout);
