import React, {FunctionComponent} from 'react';

import styles from './AvailableTime.module.scss';
import {Text} from "@chakra-ui/core/";
import Heading from "../Heading/Heading";

interface Props {
    description?: string;
}

const AvailableTime: FunctionComponent<Props> = (
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
                <span className={styles.badge}>
                    <Text>Play Music</Text>
                </span>
                <span className={styles.badge}>
                    <Text>Drawing</Text>
                </span>
                <span className={styles.badge}>
                    <Text>Cycling</Text>
                </span>
                <span className={styles.badge}>
                    <Text>Photography</Text>
                </span>
                <span className={styles.badge}>
                    <Text>Photography</Text>
                </span>
            </div>
        </div>
    );
};

export default AvailableTime;
