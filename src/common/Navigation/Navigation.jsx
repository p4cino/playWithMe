import React, {useContext} from 'react';
import {useHistory, useLocation} from 'react-router-dom';

import styles from "./Navigation.module.scss";
import robert from "../../assets/images/robert.png";
import {Text, Icon, IconButton} from "@chakra-ui/core/";
import {AppContext} from "../../App";
import Heading from "../../components/Heading/Heading";

function getPageName(value) {
    switch (value) {
        case '/':
            return 'Home';
        case '/event/':
            return 'Event';
        default:
            return 'Page';
    }
}

function Navigation() {
    const context = useContext(AppContext);
    const location = useLocation().pathname;
    const history = useHistory();

    if (context.userID !== 0) {
        return (
            <div className={styles.wrapper}>
                {location !== "/" && (
                    <button className={styles.buttonBack} onClick={() => history.replace("/")}>
                        <Icon name="arrow-back" size="24px"/> Back
                    </button>
                )}
                {location === "/" && (
                    <IconButton
                        backgroundColor="white"
                        color="black"
                        variantColor="blue"
                        aria-label="Search database"
                        icon="newCalendarSearch"
                    />
                )}
                <div>
                    <Text fontWeight="bold">
                        {getPageName(location)}
                    </Text>
                </div>
                <div className={styles.avatar}>
                    <img src={robert} alt=""/>
                    <div className={styles.avatarBadge}>
                        <Text fontSize="xs">3</Text>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className={styles.wrapper}>
                <Heading style={{textAlign: 'center', width: '100%', padding: '0'}}>
                    PlayWithMe
                </Heading>
            </div>
        );
    }

}

export default Navigation;

