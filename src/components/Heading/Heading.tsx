import React, {FunctionComponent} from 'react';

import styles from './Heading.module.scss';
import {Text} from "@chakra-ui/core/";

interface Props {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

    [key: string]: any;
}

const Heading: FunctionComponent<Props> = ({tag = 'h2', children, ...props}) => {
    const TagName = tag;

    return (
        <>
            <TagName
                className={styles.text} {...props}>
                <Text fontSize="2xl">{children}</Text>
            </TagName>
        </>
    );
};

export default Heading;
