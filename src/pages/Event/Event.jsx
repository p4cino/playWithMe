import React from 'react';
import {
    useParams
} from "react-router-dom";

import styles from './Event.module.scss';
import EventCover from "../../components/EventCover/EventCover";

function Event() {
    let {id} = useParams();
    return (
        <div className={styles.wrapper}>
            <EventCover />
        </div>
    );
}

export default Event;
