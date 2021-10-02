import { createTheme} from '@mui/material/styles';


export const theme = createTheme({
    palette:{
        primary: {
            main: '#0077B6',
            dark: '#03045E',
            light: '#00B4D8',
            contrastText:'white'
        },

        secondary: {
            main: '#90E0EF',
            light: '#CAF0F8',
            dark: '#5daebd',
            contrastText:'black'
        }
    }
})