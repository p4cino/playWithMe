import React, {FunctionComponent} from 'react';

import styles from './EventsCalendarBlock.module.scss';
import {Text} from "@chakra-ui/core/";
import Heading from "../Heading/Heading";

interface Props {
    description?: string;
}

const EventsCalendarBlock: FunctionComponent<Props> = (
    {
        description,
        ...props
    }
) => {
    return (
        <div className={styles.wrapper} {...props}>
            <div className={styles.heading}>
                <Heading style={{fontStyle: 'italic'}}>
                    Available time
                </Heading>
            </div>
            <div className={styles.description}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>

                    </li>
                </ul>
            </div>
        </div>
    );
};

export default EventsCalendarBlock;
