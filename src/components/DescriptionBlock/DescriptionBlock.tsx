import React, {FunctionComponent} from 'react';

import styles from './DescriptionBlock.module.scss';
import {Text} from "@chakra-ui/core/";
import Heading from "../Heading/Heading";
import {Skeleton} from "@chakra-ui/core";

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
            {!description && (
                <>
                    <Skeleton height="10px" width="100%"/>
                    <Skeleton height="10px" my="10px" width="100%"/>
                    <Skeleton height="10px" my="5px" width="100%"/>
                    <Skeleton height="10px" my="5px" width="100%"/>
                    <Skeleton height="10px" my="5px" width="100%"/>
                    <Skeleton height="10px" my="5px" width="100%"/>
                </>
            )}
            <div className={styles.description}>
                <Text>
                    {description}
                </Text>
            </div>
        </div>
    );
};

export default DescriptionBlock;
