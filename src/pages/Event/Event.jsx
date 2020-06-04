import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import styles from './Event.module.scss';
import EventCover from "../../components/EventCover/EventCover";
import DescriptionBlock from "../../components/DescriptionBlock/DescriptionBlock";
import {Icon, Box, Text} from "@chakra-ui/core";
import MembersList from "../../components/MembersList/MembersList";
import API from "../../api";
import {AppContext} from "../../App";

function Event() {
    const eventId = useParams();
    const context = useContext(AppContext);
    const [event, setEvents] = useState([]);

    useEffect(() => {
        const getData = async () => {
            await API.get(`event/${context.userID}/single-event/${eventId.id}`)
                .then(response => {
                    console.log(response.data);
                    setEvents(response.data);
                })
                .catch(error => {
                    console.log('Woops', error);
                });
        };
        getData();
    }, [context.userID, eventId.id]);
    return (
        <div className={styles.wrapper}>
            <EventCover id={event.id} name={event.name} category={event.category} effortLevel={event.effortLevel} />
            <DescriptionBlock description={event.description}/>
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
