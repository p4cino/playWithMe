import React from 'react';

import styles from './DescriptionBlock.module.scss';
import {Text} from "@chakra-ui/core/";
import Heading from "../Heading/Heading";

function DescriptionBlock() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <Heading style={{fontStyle: 'italic'}}>
                    Description
                </Heading>
            </div>
            <div className={styles.description}>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum ut felis rutrum accumsan.
                    Quisque ornare tortor lectus, vitae mollis eros imperdiet nec. Curabitur nec placerat ipsum. Vivamus
                    vehicula rutrum viverra. Suspendisse bibendum nec metus venenatis fringilla.
                </Text>
            </div>
        </div>
    );
}

export default DescriptionBlock;
