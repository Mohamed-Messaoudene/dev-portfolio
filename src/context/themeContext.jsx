import  { createContext, useState, useEffect, useContext } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import generateTheme from '../assets/customTheme';
const ThemeContext = createContext();

export const useCustomTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('dark');

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const theme = createTheme(generateTheme(mode));

    useEffect(() => {
        document.body.className = mode;
    }, [mode]);

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <MUIThemeProvider theme={theme}>
                {children} 
            </MUIThemeProvider>
        </ThemeContext.Provider>
    );
};
