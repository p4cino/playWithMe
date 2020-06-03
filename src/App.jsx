import React, {createContext, useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import {ThemeProvider, CSSReset, theme} from "@chakra-ui/core";
import Navigation from "./common/Navigation/Navigation";
import Event from "./pages/Event/Event";

const fonts = ["heading", "body", "mono"];
fonts.heading = '"Poppins", sans-serif';
fonts.body = '"Poppins", sans-serif';
fonts.mono = '"Poppins", sans-serif';
const customTheme = {
    ...theme,
    fonts
};

export const AppContext = createContext();

function App() {
    const [count, setCount] = useState(0);

    return (
        <ThemeProvider theme={customTheme}>
            <AppContext.Provider value={[count, setCount]}>
                <CSSReset/>

                {/*<nav>*/}
                {/*    <ul>*/}
                {/*        <li>*/}
                {/*            <Link to="/">Home</Link>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</nav>*/}
                <Navigation/>
                <Switch>
                    <Route exact path="/">
                        <Homepage/>
                    </Route>
                    <Route path="/event/:id">
                        <Event/>
                    </Route>
                </Switch>
            </AppContext.Provider>
        </ThemeProvider>
    );
}

export default App;
