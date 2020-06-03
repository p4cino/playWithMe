import React, {FunctionComponent} from 'react';
import {Avatar, AvatarGroup, Stack, Image, Skeleton, Text} from "@chakra-ui/core";

import evenImage from '../../assets/images/event.png'
import styles from './EventBlock.module.scss';

interface Props {
    img?: string;
    users?: [];
    heading?: string;
    date?: string;

    [key: string]: any;
}

const EventBlock: FunctionComponent<Props> = (
    {
        img,
        users,
        heading,
        date,
        children,
        ...props
    }
) => {

    return (
        <figure className={styles.wrapper} {...props}>
            <Skeleton height="160px" isLoaded>
                <Image src={evenImage} alt=""/>
            </Skeleton>
            <figcaption className={styles.description}>
                <div className={styles.column}>
                    <Text fontSize={"sm"}>Friday Evening</Text>
                </div>
                <div className={styles.column}>
                    <div className={styles.avatars}>
                        <Stack isInline>
                            <AvatarGroup size="xs" max={2}>
                                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov"/>
                                <Avatar name="Kola Tioluwani" src="https://bit.ly/tioluwani-kolawole"/>
                                <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds"/>
                                <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence"/>
                            </AvatarGroup>
                        </Stack>
                    </div>
                </div>
                <div className={styles.heading}>
                    <Text>Blues jam session with Artur</Text>
                </div>
                <div className={styles.footer}>
                    <Text fontSize={"sm"}>Łódź centrum</Text>
                </div>
            </figcaption>
        </figure>
    );
};

export default EventBlock;
