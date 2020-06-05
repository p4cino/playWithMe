import React, {useContext, useEffect, useState} from 'react';

import styles from './EventsBlocks.module.scss';
import Heading from "../Heading/Heading";
import EventBlock from "../EventBlock/EventBlock";
import SliderGlide from "../SliderGlide/SliderGlide";
import API from "../../api";
import {AppContext} from "../../App";
import {Skeleton} from "@chakra-ui/core";


function EventsBlocks() {
    const context = useContext(AppContext);
    const [events, setEvents] = useState([]);

    const getData = async () => {
        await API.get(`/event/${context.userID}/recommended-events`)
            .then(response => {
                setEvents(response.data.events);
                // console.log(response.data.events);
            })
            .catch(error => {
                console.log('Woops', error);
            });
    };

    useEffect(() => {
        getData();
    }, [context]);

    const options = {
        type: 'slider',
        startAt: 0,
        peek: {
            before: 0,
            after: 85
        },
        gap: 35,
        perView: 1,
        classes: {
            activeSlide: styles.activeSlide,
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <Heading>Matched Events</Heading>
            </div>
            {events.length !== 0 && (
                <SliderGlide options={options}>
                    {events.map((event, index) => {
                            return (
                                <div key={`EventsBlock-${index}`}>
                                    <EventBlock
                                        img={event.backgroundUrl}
                                        id={event.id}
                                        heading={event.name}
                                        date={event.dayDetails.timeOfDay}
                                        localization={event.localization}
                                        participants={event.participants}
                                        avatar={event.owner.profilePhotoUrl}
                                    />
                                </div>)
                        }
                    )}
                </SliderGlide>
            )}
            {events.length === 0 && (
                <SliderGlide options={options}>
                    <div key={`EventsBlock-1`}>
                        <Skeleton height="160px"/>
                    </div>
                    <div key={`EventsBlock-2`}>
                        <Skeleton height="160px"/>
                    </div>
                    <div key={`EventsBlock-3`}>
                        <Skeleton height="160px"/>
                    </div>
                </SliderGlide>
            )}
        </div>
    );
}

export default EventsBlocks;
