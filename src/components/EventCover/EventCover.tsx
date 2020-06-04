import React, {FunctionComponent} from 'react';

import styles from './EventCover.module.scss';
import {Text, Icon} from "@chakra-ui/core/";

import bg from '../../assets/images/event.png'
import Badge from "@chakra-ui/core/dist/Badge";

interface Props {
    id?: string;
    name?: string;
    effortLevel: string;
    category?: string;
}

const EventCover: FunctionComponent<Props> = (
    {
        id,
        name,
        effortLevel,
        category,
        ...props
    }
) => {

    function getDifficultyName (value: string) : string {
        switch (value) {
            case "1":
                return 'Easy';
            case "2":
                return 'Medium';
            case "3":
                return 'Hard';
            default:
                return 'Medium';
        }
    }

    return (
        <div className={styles.wrapper} style={{backgroundImage: `url(${bg})`}} {...props}>
            <div>
                <div className={styles.heading}>
                    {name}
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.difficulty}>
                    <div className={styles.icon}>
                        <Icon size="2rem" name="podium"/>
                    </div>
                    <Text>
                        Difficulty: {getDifficultyName(effortLevel)}
                    </Text>
                </div>
                <div className={styles.badgeWrapper}>
                    <Badge variantColor="purple" backgroundColor="#6335CC" color="#fff" px="4" py="1"
                           rounded="14px" textTransform="initial">
                        <Text>
                            {category}
                        </Text>
                    </Badge>
                </div>
            </div>
        </div>
    );
};

export default EventCover;
