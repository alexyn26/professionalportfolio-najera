import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#e6ceff',
      main: '#b39ddb',
      dark: '#836fa9',
      contrastText: '#000000',
    },
    secondary: {
      light: '#8558da',
      main: '#512ca8',
      dark: '#140078',
      contrastText: '#ffffff',
    },
  },
});
export default theme;