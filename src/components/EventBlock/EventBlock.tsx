import React, {FunctionComponent} from 'react';
import {Avatar, AvatarGroup, Stack, Image, Skeleton, Text} from "@chakra-ui/core";
// @ts-ignore
import {useHistory} from 'react-router-dom';

import evenImage from '../../assets/images/event.png'
import styles from './EventBlock.module.scss';


interface Props {
    id?: string;
    img?: string;
    users?: [];
    heading?: string;
    date?: string;
    localization?: string;

    [key: string]: any;
}

const EventBlock: FunctionComponent<Props> = (
    {
        id,
        img,
        users,
        heading,
        date,
        localization,
        children,
        ...props
    }
) => {
    const history = useHistory();

    return (
        <figure onClick={() => history.replace(`/event/${id}`)} className={styles.wrapper} {...props}>
            <Skeleton height="160px" isLoaded>
                <Image src={evenImage} alt=""/>
            </Skeleton>
            <figcaption className={styles.description}>
                <div className={styles.column}>
                    <Text fontSize={"sm"}>{date}</Text>
                </div>
                <div className={styles.column}>
                    <div className={styles.avatars}>
                        <Stack isInline>
                            <AvatarGroup size="xs" max={2}>
                                <Avatar border="none" name="Dan Abrahmov" src="https://bit.ly/dan-abramov"/>
                                <Avatar name="Kola Tioluwani" src="https://bit.ly/tioluwani-kolawole"/>
                                <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds"/>
                                <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence"/>
                            </AvatarGroup>
                        </Stack>
                    </div>
                </div>
                <div className={styles.heading}>
                    <Text>{heading}</Text>
                </div>
                <div className={styles.footer}>
                    <Text fontSize={"sm"}>{localization}</Text>
                </div>
            </figcaption>
        </figure>
    );
};

export default EventBlock;
