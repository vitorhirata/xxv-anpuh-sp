import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F4B303',
    },
    secondary: {
      main: '#608097',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FFFFFF',
    },
  },
});

export default theme;
