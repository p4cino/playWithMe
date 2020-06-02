import React from 'react';

import styles from './Homepage.module.scss';
import {Text, Stack} from "@chakra-ui/core/";
import EventsBlocks from "../../components/EventsBlocks/EventsBlocks";



function Homepage() {
    return (
        <div className={styles.wrapper}>
           <EventsBlocks />
           <EventsBlocks />
           <EventsBlocks />
        </div>
    );
}

export default Homepage;
