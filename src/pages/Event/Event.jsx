import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import styles from './Event.module.scss';
import EventCover from "../../components/EventCover/EventCover";
import DescriptionBlock from "../../components/DescriptionBlock/DescriptionBlock";
import {Icon, Box, Text} from "@chakra-ui/core";
import MembersList from "../../components/MembersList/MembersList";
import API from "../../api";
import {AppContext} from "../../App";
import Skeleton from "@chakra-ui/core/dist/Skeleton";

function Event() {
    const eventId = useParams();
    const context = useContext(AppContext);
    const [event, setEvents] = useState();

    useEffect(() => {
        const getData = async () => {
            await API.get(`event/${context.userID}/single-event/${eventId.id}`)
                .then(response => {
                    console.log(response.data.dayDetails.timeOfDay);
                    setEvents(response.data);
                })
                .catch(error => {
                    console.log('Woops', error);
                });
        };
        getData();
    }, [context.userID, eventId.id]);
    if(event) {
        return (
            <div className={styles.wrapper}>
                <EventCover id={event.id} name={event.name} category={event.category} effortLevel={event.effortLevel} />
                <DescriptionBlock description={event.description}/>
                <div className={styles.details}>
                    <Box w="100%" py="5px">
                        <Icon size="24px" name="newCalendar"/>
                        <Text display="inline">
                            {event.dayDetails.timeOfDay} {event.startDate}
                        </Text>
                    </Box>
                    <Box w="100%" py="5px">
                        <Icon size="24px" name="newClock"/>
                        <Text display="inline">
                            {event.startTimeFormatted} - {event.endTimeFormatted}
                        </Text>
                    </Box>
                    <Box w="100%" py="5px" pb="16px">
                        <Icon size="24px" name="newMap"/>
                        <Text display="inline">
                            {event.localizationDetails}
                        </Text>
                    </Box>
                </div>
                <MembersList/>
            </div>
        );
    }
    else {
        return (
            <div className={styles.wrapper}>
                <Skeleton height="80px" my="10px" />
                <Skeleton height="20px" my="10px" />
                <div className={styles.details}>
                    <Box w="100%" py="5px">
                        <Icon size="24px" name="newCalendar"/>
                        <Text display="inline">
                            <Skeleton height="20px" my="10px" />
                            <Skeleton height="20px" my="10px" />
                        </Text>
                    </Box>
                    <Box w="100%" py="5px">
                        <Icon size="24px" name="newClock"/>
                        <Text display="inline">
                            <Skeleton height="20px" my="10px" />
                            <Skeleton height="20px" my="10px" />
                            <Skeleton height="20px" my="10px" />
                            <Skeleton height="20px" my="10px" />
                        </Text>
                    </Box>
                    <Box w="100%" py="5px" pb="16px">
                        <Icon size="24px" name="newMap"/>
                        <Text display="inline">
                            <Skeleton height="20px" my="10px" />
                            <Skeleton height="20px" my="10px" />
                            <Skeleton height="20px" my="10px" />
                            <Skeleton height="20px" my="10px" />
                            <Skeleton height="20px" my="10px" />
                            <Skeleton height="20px" my="10px" />
                        </Text>
                    </Box>
                </div>
                <MembersList/>
            </div>
        );
    }
}

export default Event;
