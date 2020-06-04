import React, {FunctionComponent} from 'react';

import styles from './DescriptionBlock.module.scss';
import {Text} from "@chakra-ui/core/";
import Heading from "../Heading/Heading";

interface Props {
    description?: string;
}

const DescriptionBlock: FunctionComponent<Props> = (
    {
        description,
        ...props
    }
) => {
    return (
        <div className={styles.wrapper} {...props}>
            <div className={styles.heading}>
                <Heading style={{fontStyle: 'italic'}}>
                    Description
                </Heading>
            </div>
            <div className={styles.description}>
                <Text>
                    {description}
                </Text>
            </div>
        </div>
    );
};

export default DescriptionBlock;
