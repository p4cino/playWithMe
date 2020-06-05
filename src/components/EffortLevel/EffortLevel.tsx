import React, {FunctionComponent} from 'react';

import styles from './EffortLevel.module.scss';
import {Text} from "@chakra-ui/core/";
import Heading from "../Heading/Heading";

interface Props {
    description?: string;
}

const EffortLevel: FunctionComponent<Props> = (
    {
        description,
        ...props
    }
) => {
    return (
        <div className={styles.wrapper} {...props}>
            <div className={styles.heading}>
                <Heading style={{fontStyle: 'italic'}}>
                    EffortLevel
                </Heading>
            </div>
            <div className={styles.description}>
                <span className={styles.badge}>
                    <Text>Easy</Text>
                </span>
                <span className={styles.badge}>
                    <Text>Normal</Text>
                </span>
                <span className={styles.badge}>
                    <Text>Hard</Text>
                </span>
            </div>
        </div>
    );
};

export default EffortLevel;
