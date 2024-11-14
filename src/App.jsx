
import { MyRoutes } from "./index";
import {createContext, useState} from "react"
import {Light,Dark} from "./index"
import {ThemeProvider} from "styled-components"
export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState ("light");
  const themeStyle = theme === "light"? Light:Dark
  return (
    <>
      <MyRoutes />
    </>
  );
}

export default App;
