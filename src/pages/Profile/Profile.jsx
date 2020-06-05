import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import styles from './Profile.module.scss';
import API from "../../api";
import ActivitiesBlock from "../../components/ActivitiesBlock/ActivitiesBlock";
import AvailableTime from "../../components/AvailableTime/AvailableTime";
import EventsCalendarBlock from "../../components/EventsCalendarBlock/EventsCalendarBlock";
import EffortLevel from "../../components/EffortLevel/EffortLevel";
import EventsHistoryBlock from "../../components/EventsHistoryBlock/EventsHistoryBlock";
import ProfileCover from "../../components/ProfileCover/ProfileCover";

function Profile() {
    const event = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        const getData = async () => {
            await API.get(`profile/${event.id}`)
                .then(response => {
                    setUser(response.data);
                    console.log(response.data.localization.name);
                })
                .catch(error => {
                    console.log('Woops', error);
                });
        };
        getData();
    }, [event.id]);
    return (
        <div className={styles.wrapper}>
            <ProfileCover avatar={user.profilePhotoUrl} name={user.firstName} surName={user.lastName} localization="Łódź Górna" />
            <ActivitiesBlock/>
            <AvailableTime/>
            <EffortLevel/>
            <EventsCalendarBlock/>
            <EventsHistoryBlock/>
        </div>
    );
}

export default Profile;
