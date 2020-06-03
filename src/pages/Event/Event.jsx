import React from 'react';
// import {
//     useParams
// } from "react-router-dom";

import styles from './Event.module.scss';
import EventCover from "../../components/EventCover/EventCover";
import DescriptionBlock from "../../components/DescriptionBlock/DescriptionBlock";
import {Icon, Box, Text} from "@chakra-ui/core";
import MembersList from "../../components/MembersList/MembersList";

function Event() {
    // let {id} = useParams();
    return (
        <div className={styles.wrapper}>
            <EventCover/>
            <DescriptionBlock/>
            <div className={styles.details}>
                <Box w="100%" py="5px">
                    <Icon size="24px" name="newCalendar"/>
                    <Text display="inline">
                        Lokal, ul. Testowa 61a, 90-009 Łódź
                    </Text>
                </Box>
                <Box w="100%" py="5px">
                    <Icon size="24px" name="newClock"/>
                    <Text display="inline">
                        Lokal, ul. Testowa 61a, 90-009 Łódź
                    </Text>
                </Box>
                <Box w="100%" py="5px" pb="16px">
                    <Icon size="24px" name="newMap"/>
                    <Text display="inline">
                        Lokal, ul. Testowa 61a, 90-009 Łódź
                    </Text>
                </Box>
            </div>
            <MembersList/>
        </div>
    );
}

export default Event;
