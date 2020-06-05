import React, {FunctionComponent} from 'react';

import styles from './EventsHistoryBlock.module.scss';
import Heading from "../Heading/Heading";

interface Props {
    description?: string;
}

const EventsHistoryBlock: FunctionComponent<Props> = (
    {
        description,
        ...props
    }
) => {
    return (
        <div className={styles.wrapper} {...props}>
            <div className={styles.historyHeading}>
                <Heading style={{fontStyle: 'italic'}}>
                    History events
                </Heading>
            </div>
            <div className={styles.description}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <div className={styles.day}>
                            5.05
                        </div>
                        <div className={styles.event}>
                            <div className={styles.eventName}>
                                Tenis match
                            </div>
                            <div className={styles.eventLocalization}>
                                10:00-12:00 Łódź Widzew
                            </div>
                        </div>
                    </li>
                    <li className={styles.listItem}>
                        <div className={styles.day}>
                            5.05
                        </div>
                        <div className={styles.event}>
                            <div className={styles.eventName}>
                                Tenis match
                            </div>
                            <div className={styles.eventLocalization}>
                                10:00-12:00 Łódź Widzew
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default EventsHistoryBlock;
