import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import {  } from '@mui/material/colors';


let theme = createTheme({
  palette: {
    primary: {
        main: '#313332',
      },
      secondary: {
        main: '#edf2ff',
      },
  
  },
  typography :{
    fontFamily: "Segou UI"
  }
});

theme = responsiveFontSizes(theme)

export default theme