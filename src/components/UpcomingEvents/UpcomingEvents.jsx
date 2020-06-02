import React from 'react';

import styles from './UpcomingEvents.module.scss';
import Heading from "../Heading/Heading";


class UpcomingEvents extends React.Component {
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
                kalendarz
            </div>
        );
    }
}

export default UpcomingEvents;
