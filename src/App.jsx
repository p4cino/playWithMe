import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import {ThemeProvider, CSSReset, theme} from "@chakra-ui/core";
import Navigation from "./common/Navigation/Navigation";

const fonts = ["heading", "body", "mono"];
fonts.heading = '"Poppins", sans-serif';
fonts.body = '"Poppins", sans-serif';
fonts.mono = '"Poppins", sans-serif';

const customTheme = {
    ...theme,
    fonts
};

function App() {
    return (
        <ThemeProvider theme={customTheme}>
            <CSSReset/>
            <Router>
                {/*<nav>*/}
                {/*    <ul>*/}
                {/*        <li>*/}
                {/*            <Link to="/">Home</Link>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</nav>*/}
                <Navigation/>
                <Switch>
                    <Route path="/">
                        <Homepage/>
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
