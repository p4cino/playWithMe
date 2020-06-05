import React, {FunctionComponent} from 'react';

import styles from './ProfileCover.module.scss';
import {Text, Icon} from "@chakra-ui/core/";

import bg from '../../assets/images/event.png'
import Badge from "@chakra-ui/core/dist/Badge";

interface Props {
}

const ProfileCover: FunctionComponent<Props> = (
    {
        ...props
    }
) => {

    return (
        <div className={styles.wrapper} {...props}>
            test
        </div>
    );
};

export default ProfileCover;
