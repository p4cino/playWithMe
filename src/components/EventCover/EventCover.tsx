import React from 'react';

import styles from './EventCover.module.scss';
import {Text, Icon, Box} from "@chakra-ui/core/";

import bg from '../../assets/images/event.png'
import Badge from "@chakra-ui/core/dist/Badge";

function EventCover() {
    return (
        <div className={styles.wrapper} style={{backgroundImage: `url(${bg})`}}>
            <div>
                <div className={styles.heading}>
                    Blues jam session with Artur
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.difficulty}>
                    <div className={styles.icon}>
                        <Icon size="2rem" name="podium"/>
                    </div>
                    <Text>
                        Difficulty: Medium
                    </Text>
                </div>
                <div className={styles.badgeWrapper}>
                    <Badge variantColor="purple" backgroundColor="#6335CC" color="#fff" px="4" py="1"
                           rounded="14px" textTransform="initial">
                        <Text>
                            Play Music
                        </Text>
                    </Badge>
                </div>
            </div>
        </div>
    );
}

export default EventCover;
