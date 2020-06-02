import React, {FunctionComponent} from 'react';
import {Avatar, AvatarBadge, AvatarGroup, Stack, Image} from "@chakra-ui/core";
import {Text} from "@chakra-ui/core/";

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
            <Image src={evenImage} alt="" fallbackSrc="https://via.placeholder.com/256x160"/>
            <figcaption className={styles.description}>
                <div className={styles.heading}>
                    <Text>Blues jam session</Text>
                </div>
                <div className={styles.footer}>
                    <Text fontSize={"sm"}>06.06 | 22:30 | Lokal</Text>
                </div>
            </figcaption>
        </figure>
    );
};

export default EventBlock;
