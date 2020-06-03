import React from 'react';

import styles from './CalendarEvents.module.scss';
import Heading from "../Heading/Heading";
import EventBlock from "../EventBlock/EventBlock";
import {Text} from "@chakra-ui/core/";


class CalendarEvents extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        // };
    }

    componentDidMount() {
    }

    render() {

        return (
            <div className={styles.wrapper}>
                <div className={styles.heading}>
                    <Heading>Upcoming Events</Heading>
                </div>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <div className={styles.listDayColumn}>
                            <div className={styles.dayNumber}>
                                <Text>05</Text>
                            </div>
                            <div className={styles.dayName}>
                                <Text>FRI</Text>
                            </div>
                        </div>
                        <div className={styles.listEventColumn}>
                            <div className={styles.eventWrapper}>
                                <EventBlock/>
                            </div>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <div className={styles.listDayColumn}>
                            <div className={styles.dayNumber}>
                                <Text>06</Text>
                            </div>
                            <div className={styles.dayName}>
                                <Text>SAT</Text>
                            </div>
                        </div>
                        <div className={styles.listEventColumn}>
                            <div className={styles.eventWrapper}>
                                <EventBlock/>
                            </div>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <div className={styles.listDayColumn}>
                            <div className={styles.dayNumber}>
                                <Text>06</Text>
                            </div>
                            <div className={styles.dayName}>
                                <Text>SAT</Text>
                            </div>
                        </div>
                        <div className={styles.listEventColumn}>
                            <div className={styles.eventWrapper}>
                                <EventBlock/>
                            </div>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <div className={styles.listDayColumn}>
                            <div className={styles.dayNumber}>
                                <Text>06</Text>
                            </div>
                            <div className={styles.dayName}>
                                <Text>SAT</Text>
                            </div>
                        </div>
                        <div className={styles.listEventColumn}>
                            <div className={styles.eventWrapper}>
                                <EventBlock/>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CalendarEvents;
