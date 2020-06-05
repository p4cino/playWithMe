import React, {FunctionComponent} from 'react';
import {Image, Skeleton} from "@chakra-ui/core";
// @ts-ignore
import {useHistory} from 'react-router-dom';

import styles from './UserBlock.module.scss';

interface Props {
    id: string;
    img: string;
    user?: [];

    [key: string]: any;
}

const UserBlock: FunctionComponent<Props> = (
    {
        id,
        img,
        user,
        ...props
    }
) => {
    const history = useHistory();

    if(img) {
        return (
            <figure onClick={() => history.replace(`/profile/${id}`)} className={styles.wrapper} {...props}>
                <Image className={styles.image} src={img} fallbackSrc="https://via.placeholder.com/60" alt=""/>
            </figure>
        );
    } else {
        return (
            <figure onClick={() => history.replace(`/profile/${id}`)} className={styles.wrapper} {...props}>
                <Skeleton height="40px" my="10px" />
            </figure>
        )
    }
};

export default UserBlock;
