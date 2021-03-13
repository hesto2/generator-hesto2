import { createMuiTheme } from '@material-ui/core';
import { CustomTheme } from './types';
const theme = createMuiTheme({
  palette: {
    primary: { main: '#023456', contrastText: '#FFFFFF' },
    secondary: { main: '#D0021B' },
    tertiary: { main: '#D8D8D8' },
    background: {
      contrast: '#D8D8D8',
    },
    text: {
      secondary: '#676767',
    },
  },
  typography: {
    fontFamily: 'UntitledSans',
    body1: {
      fontSize: 15,
    },
    body2: {
      fontSize: 20,
    },
    subtitle1: {
      fontSize: 15,
      color: '#686868',
    },
    h1: {
      fontWeight: 'bold',
    },
    h2: {
      fontWeight: 'bold',
    },
    h3: {
      fontWeight: 'bold',
    },
    h4: {
      fontWeight: 'bold',
    },
    h5: {
      fontWeight: 'bold',
    },
    h6: {
      fontWeight: 'bold',
    },
  },
  overrides: {
    MuiTextField: {
      root: {
        marginTop: 8,
      },
    },
    MuiLink: {
      root: {
        textDecoration: 'underline',
      },
    },
    MuiButton: {
      root: {
        borderRadius: 100,
        marginTop: 8,
        marginBottom: 8,
        minWidth: 100,
      },
      sizeLarge: {
        minWidth: 145,
      },
    },
  },
} as CustomTheme);

export default theme;
