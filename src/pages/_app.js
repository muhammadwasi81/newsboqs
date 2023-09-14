import '@/styles/globals.css';
import { baselightTheme } from '../../theme/DefaultColors';
import { ThemeProvider } from '@mui/material/styles';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider theme={baselightTheme}>
      {/* <CssBaseline /> */}
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}
