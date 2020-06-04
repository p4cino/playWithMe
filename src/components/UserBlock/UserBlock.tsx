import React, {FunctionComponent} from 'react';
import {Image, Skeleton} from "@chakra-ui/core";

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

    return (
        <figure onClick={() => console.log(id)} className={styles.wrapper} {...props}>
            <Skeleton height="64px" width="64px" borderRadius={14} isLoaded>
                <Image className={styles.image} src={img} alt=""/>
            </Skeleton>
            <figcaption className="">
            </figcaption>
        </figure>
    );
};

export default UserBlock;
