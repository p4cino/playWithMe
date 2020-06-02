import React from 'react';

import styles from './Homepage.module.scss';
import {Text, Stack} from "@chakra-ui/core/";
import EventsBlocks from "../../components/EventsBlocks/EventsBlocks";
import UsersBlocks from "../../components/UsersBlocks/UsersBlocks";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";

function Homepage() {
    return (
        <div className={styles.wrapper}>
           <EventsBlocks />
           <UsersBlocks />
           <UpcomingEvents/>
        </div>
    );
}

export default Homepage;
