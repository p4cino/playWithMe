import React, {useContext, useEffect, useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom'
// import HamburgerMenu from "react-hamburger-menu";

import styles from "./Navigation.module.scss";
import robert from "../../assets/images/robert.png";
import {Text} from "@chakra-ui/core/";
import { AppContext } from "../../App";

function Navigation() {
    const [count] = useContext(AppContext);
    const location = useLocation().pathname;
    const history = useHistory();
    console.log(location);

    return (
        <div className={styles.wrapper}>
            {location !== "/" && (
                <button className={styles.buttonBack} onClick={() => history.goBack()}>
                    Event
                </button>
            )}

            <div className={styles.avatar}>
                <img src={robert} alt=""/>
                <div className={styles.avatarBadge}>
                    <Text fontSize="xs">3</Text>
                </div>
            </div>
        </div>
    );
}

export default Navigation;

