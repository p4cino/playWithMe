import React, {useContext} from 'react';
import {useHistory, useLocation} from 'react-router-dom';

import styles from "./Navigation.module.scss";
import robert from "../../assets/images/robert.png";
import {Text, Icon, IconButton} from "@chakra-ui/core/";
import {AppContext} from "../../App";
import Heading from "../../components/Heading/Heading";

function Navigation() {
    const context = useContext(AppContext);
    const location = useLocation().pathname;
    const history = useHistory();

    function getPageName(value) {
        switch (value) {
            case '/':
                return 'Home';
            default:
                return location.split("/").slice(1)[0].charAt(0).toUpperCase() +
                    location.split("/").slice(1)[0].slice(1);
        }
    }

    console.log(location.split("/").slice(1)[0]);
    if (context.userID !== 0 && context.user) {
        return (
            <div className={styles.wrapper}>
                {location !== "/" && (
                    <button  className={`${location.split("/").slice(1)[0] === "event" ? styles.whiteText : styles.blackText}`} onClick={() => history.replace("/")}>
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
                    <Text className={`${location.split("/").slice(1)[0] === "event" ? styles.whiteText : styles.blackText}`} fontWeight="bold">
                        {getPageName(location)}
                    </Text>
                </div>
                <div className={styles.avatar} onClick={() => history.replace(`/profile/${context.userID}`)}>
                    <img src={context.user.profilePhotoUrl} alt=""/>
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

