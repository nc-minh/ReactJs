import { useState, createContext } from 'react'
import Content from './Content'
import '../../App.css'


export const ThemeContext = createContext()

console.log(ThemeContext);

function Main(){
    // theme: dark/light
    // 1. Create context
    // 2. Provider -> chuyển dữ liệu 
    // 3. Consumer -> nhận dữ liệu
    const [theme, setTheme] = useState('dark')


    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return(
        
        <ThemeContext.Provider value={theme}>
            <div>
                <button onClick={toggleTheme}>Toggle theme</button>
                <Content/>
            </div>
        </ThemeContext.Provider>
    )
}

export default Main