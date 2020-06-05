import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import styles from './Profile.module.scss';
import EventCover from "../../components/EventCover/EventCover";
import DescriptionBlock from "../../components/DescriptionBlock/DescriptionBlock";
import {Icon, Box, Text} from "@chakra-ui/core";
import MembersList from "../../components/MembersList/MembersList";
import API from "../../api";
import {AppContext} from "../../App";
import ActivitiesBlock from "../../components/ActivitiesBlock/ActivitiesBlock";
import AvailableTime from "../../components/AvailableTime/AvailableTime";
import EventsCalendarBlock from "../../components/EventsCalendarBlock/EventsCalendarBlock";
import EffortLevel from "../../components/EffortLevel/EffortLevel";
import EventsHistoryBlock from "../../components/EventsHistoryBlock/EventsHistoryBlock";
import ProfileCover from "../../components/ProfileCover/ProfileCover";

function Profile() {
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
            <ProfileCover/>
            <ActivitiesBlock/>
            <AvailableTime/>
            <EffortLevel/>
            <EventsCalendarBlock/>
            <EventsHistoryBlock/>
        </div>
    );
}

export default Profile;
