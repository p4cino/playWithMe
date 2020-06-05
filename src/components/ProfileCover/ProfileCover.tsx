import React, {FunctionComponent} from 'react';

import styles from './ProfileCover.module.scss';
import {Text} from "@chakra-ui/core/";

interface Props {
    name?: string;
    surName?: string;
    localization?: string;
    avatar?: string;
}


const ProfileCover: FunctionComponent<Props> = (
    {
        name,
        surName,
        localization,
        avatar
    }
) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.person}>
                <div className={styles.avatar}>
                    <img src={avatar} alt=""/>
                </div>
                <div className={styles.name}>
                    <Text>{name}</Text>
                    <Text>{surName}</Text>
                    <div className={styles.location}>
                        <Text>{localization}</Text>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.column}>
                    <div className={styles.event}>
                        <Text>Events</Text>
                    </div>
                    <div className={styles.number}>
                        <Text>34</Text>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.event}>
                        <Text>Followed</Text>
                    </div>
                    <div className={styles.number}>
                        <Text>12</Text>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.event}>
                        <Text>Watchers</Text>
                    </div>
                    <div className={styles.number}>
                        <Text>56</Text>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCover;
