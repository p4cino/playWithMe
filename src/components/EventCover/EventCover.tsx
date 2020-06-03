import React from 'react';

import styles from './EventCover.module.scss';
import {Text} from "@chakra-ui/core/";

import bg from '../../assets/images/event.png'

function EventCover() {
    return (
        <div className={styles.wrapper} style={{backgroundImage: `url(${bg})`}}>
            <div>
                <div className={styles.heading}>
                    Blues jam session with Artur
                </div>
            </div>
            <div>
                <div>
                    <Text>Difficulty: Medium</Text>
                </div>
                <div>
                    <Text>Play Music</Text>
                </div>
            </div>
        </div>
    );
}

export default EventCover;
