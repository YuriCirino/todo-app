import { createContext, useState } from "react"
const ThemeContext = createContext("dark")

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark")

    function toggleTheme() {
        setTheme((prevTheme) => {
            return prevTheme == "dark" ? "light" : "dark"
        })
    }

    return (
        <ThemeContext.Provider
            value={{ theme: theme, toggleTheme: toggleTheme }}
        >
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContext
