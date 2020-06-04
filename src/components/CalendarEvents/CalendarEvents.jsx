import React, {useContext, useEffect, useState} from 'react';

import styles from './CalendarEvents.module.scss';
import Heading from "../Heading/Heading";
import EventBlock from "../EventBlock/EventBlock";
import {Text} from "@chakra-ui/core/";
import {AppContext} from "../../App";
import API from "../../api";
import {Skeleton} from "@chakra-ui/core";


function CalendarEvents() {
    const context = useContext(AppContext);
    const [events, setEvents] = useState([]);

    const getData = async () => {
        await API.get(`/event/${context.userID}/recommended-events`)
            .then(response => {
                setEvents(response.data.events);
            })
            .catch(error => {
                console.log('Woops', error);
            });
    };

    useEffect(() => {
        getData();
    }, [context]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <Heading>Upcoming Events</Heading>
            </div>
            <ul className={styles.list}>
                {events.length !== 0 && (
                    events.map((event, index) => {
                        if(!event.recommendedByHistory && !event.recommendedByFavorite && !event.recommendedByRatings)
                            return (
                                <li className={styles.listItem} key={`calendar-${index}`}>
                                    <div className={styles.listDayColumn}>
                                        <div className={styles.dayNumber}>
                                            <Text>{event.startDateFormatted.slice(0, 2)}</Text>
                                        </div>
                                        <div className={styles.dayName}>
                                            <Text>{event.dayDetails.day.slice(0,3)}</Text>
                                        </div>
                                    </div>
                                    <div className={styles.listEventColumn}>
                                        <div className={styles.eventWrapper}>
                                            <EventBlock
                                                id={event.id}
                                                heading={event.name}
                                                date={event.startDateFormatted}
                                                localization={event.localization}
                                                img={event.backgroundUrl}
                                                participants={event.participants}
                                                avatar={event.owner.profilePhotoUrl}
                                            />
                                        </div>
                                    </div>
                                </li>)
                        }
                    )
                )}
                {events.length === 0 && (
                    <>
                        <li className={styles.listItem} key={`calendar-1`}>
                            <div className={styles.listDayColumn}>
                                <div className={styles.dayNumber}>
                                    <Text><Skeleton height="10px"/></Text>
                                </div>
                                <div className={styles.dayName}>
                                    <Text><Skeleton height="10px"/></Text>
                                </div>
                            </div>
                            <div className={styles.listEventColumn}>
                                <div className={styles.eventWrapper}>
                                    <Skeleton height="160px"/>
                                </div>
                            </div>
                        </li>
                        <li className={styles.listItem} key={`calendar-2`}>
                            <div className={styles.listDayColumn}>
                                <div className={styles.dayNumber}>
                                    <Text><Skeleton height="10px"/></Text>
                                </div>
                                <div className={styles.dayName}>
                                    <Text><Skeleton height="10px"/></Text>
                                </div>
                            </div>
                            <div className={styles.listEventColumn}>
                                <div className={styles.eventWrapper}>
                                    <Skeleton height="160px"/>
                                </div>
                            </div>
                        </li>
                        <li className={styles.listItem} key={`calendar-3`}>
                            <div className={styles.listDayColumn}>
                                <div className={styles.dayNumber}>
                                    <Text><Skeleton height="10px"/></Text>
                                </div>
                                <div className={styles.dayName}>
                                    <Text><Skeleton height="10px"/></Text>
                                </div>
                            </div>
                            <div className={styles.listEventColumn}>
                                <div className={styles.eventWrapper}>
                                    <Skeleton height="160px"/>
                                </div>
                            </div>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
}

export default CalendarEvents;
