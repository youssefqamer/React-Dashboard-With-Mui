import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { createContext, useMemo, useState } from "react";
import { getDesignTokens } from "../../Theme";
export let themeContext=createContext(null)
export default function ThemecontextProvider({children}){
    const [mode, setMode] = useState(localStorage.getItem('currentMode')?localStorage.getItem('currentMode'):'dark');
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    const toggleMode=()=>{
        setMode((prevMode) =>
        prevMode === 'light' ? 'dark' : 'light',
        localStorage.setItem('currentMode',theme.palette.mode==='light'?'dark':'light')
      );
      
      }
    return <themeContext.Provider value={{toggleMode}}>
        <ThemeProvider theme={theme} >
        {children}
        </ThemeProvider>
    </themeContext.Provider>
} 
