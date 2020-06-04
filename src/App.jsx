import React, {createContext, useState} from 'react';
import {Switch, Route} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import {ThemeProvider, CSSReset, theme} from "@chakra-ui/core";
import Navigation from "./common/Navigation/Navigation";
import Event from "./pages/Event/Event";
import Login from "./pages/Login/Login";

const fonts = ["heading", "body", "mono"];
fonts.heading = '"Poppins", sans-serif';
fonts.body = '"Poppins", sans-serif';
fonts.mono = '"Poppins", sans-serif';
const customIcons = {
    podium: {
        path: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22">
                <path className="a"
                      d="M12,7.09l2.45,1.49L13.8,5.77,16,3.89l-2.89-.25L12,1,10.87,3.64,8,3.89l2.18,1.88L9.5,8.58,12,7.09m-8,6,2.45,1.49L5.8,11.77,8,9.89,5.11,9.64,4,7,2.87,9.64,0,9.89l2.18,1.88L1.5,14.58,4,13.09m16-3,2.45,1.49L21.8,8.77,24,6.89l-2.89-.25L20,4,18.87,6.64,16,6.89l2.18,1.88-.68,2.81L20,10.09M15,23H9V10h6V23M7,23H1V17H7v6m16,0H17V13h6Z"
                      transform="translate(0 -1)"/>
            </svg>
        ),
    },
    newCalendar: {
        path: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20">
                <path
                    d="M19,4H18V2H16V4H8V2H6V4H5A2,2,0,0,0,3,6V20a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2m0,16H5V10H19V20M19,8H5V6H19Z"
                    transform="translate(-3 -2)"/>
            </svg>
        )
    },
    newClock: {
        path: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <path
                    d="M12,20a8,8,0,1,0-8-8,8.024,8.024,0,0,0,8,8M12,2A10,10,0,1,1,2,12,10.029,10.029,0,0,1,12,2m5,9.5V13H11V7h1.5v4.5Z"
                    transform="translate(-2 -2)"/>
            </svg>
        )
    },
    newMap: {
        path: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21">
                <path
                    d="M12,4a4.012,4.012,0,0,1,4,4c0,2.1-2.1,5.5-4,7.9C10.1,13.4,8,10.1,8,8a4.012,4.012,0,0,1,4-4m0-2A6.018,6.018,0,0,0,6,8c0,4.5,6,11,6,11s6-6.6,6-11a6.018,6.018,0,0,0-6-6m0,4a2,2,0,1,0,2,2,2.006,2.006,0,0,0-2-2m8,13c0,2.2-3.6,4-8,4s-8-1.8-8-4c0-1.3,1.2-2.4,3.1-3.2l.6.9c-1,.5-1.7,1.1-1.7,1.8C6,19.9,8.7,21,12,21s6-1.1,6-2.5c0-.7-.7-1.3-1.8-1.8l.6-.9C18.8,16.6,20,17.7,20,19Z"
                    transform="translate(-4 -2)"/>
            </svg>
        )
    },
    newMember: {
        path: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15">
                <path
                    d="M16,17v2H2V17s0-4,7-4,7,4,7,4M12.5,7.5A3.5,3.5,0,1,0,9,11a3.5,3.5,0,0,0,3.5-3.5M15.94,13A5.32,5.32,0,0,1,18,17v2h4V17s0-3.63-6.06-4M15,4a3.39,3.39,0,0,0-1.93.59,5,5,0,0,1,0,5.82A3.39,3.39,0,0,0,15,11a3.5,3.5,0,0,0,0-7Z"
                    transform="translate(-2 -4)"/>
            </svg>
        )
    },
};
const customTheme = {
    ...theme,
    fonts,
    icons: {
        ...theme.icons,
        ...customIcons,
    }
};

export const AppContext = createContext();

function App() {
    const [userID, setUserID] = useState(0);

    return (
        <ThemeProvider theme={customTheme}>
            <AppContext.Provider value={{userID, setUserID}}>
                <CSSReset/>
                <Navigation/>
                <Switch>
                    {userID !== 0 && (
                        <>
                            <Route exact path="/">
                                <Homepage/>
                            </Route>
                            <Route exact path="/event/:id">
                                <Event/>
                            </Route>
                        </>
                    )}
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                </Switch>
            </AppContext.Provider>
        </ThemeProvider>
    );
}

export default App;
