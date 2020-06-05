import React, {FunctionComponent} from 'react';
import {Avatar, AvatarGroup, Stack, Image, Text} from "@chakra-ui/core";
// @ts-ignore
import {useHistory} from 'react-router-dom';

import styles from './EventBlock.module.scss';


interface Props {
    id?: string;
    img?: string;
    users?: [];
    heading?: string;
    date?: string;
    localization?: string;
    avatar?: string;
    participants: [];

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
        avatar,
        participants,
        children,
        ...props
    }
) => {
    const history = useHistory();

    return (
        <figure onClick={() => history.replace(`/event/${id}`)} className={styles.wrapper} {...props}>
            <Image src={img} alt="" fallbackSrc="https://via.placeholder.com/160"/>
            <figcaption className={styles.description}>
                <div className={styles.column}>
                    <Text fontSize={"sm"}>{date}</Text>
                </div>
                <div className={styles.column}>
                    <div className={styles.avatars}>
                        <Stack isInline>
                            {participants?.length === 0 && (
                                <Avatar size="xs" border="none" name="Dan Abrahmov" src={avatar}/>
                            )}
                            {participants?.length !== 0 && (
                                <AvatarGroup spacing="-5px" size="xs" color="black" max={2}>
                                    {participants?.map((participant: any, index: number) =>
                                        <Avatar
                                            key={`Avatars-${index}`}
                                            border="none"
                                            name="Ryan Florence"
                                            src={participant.profilePhotoUrl}
                                        />
                                    )}
                                </AvatarGroup>
                            )}
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
