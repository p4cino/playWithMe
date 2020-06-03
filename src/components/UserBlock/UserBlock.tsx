import React, {FunctionComponent} from 'react';
import {Image, Skeleton} from "@chakra-ui/core";

import styles from './UserBlock.module.scss';

interface Props {
    img: string;
    user?: [];

    [key: string]: any;
}

const UserBlock: FunctionComponent<Props> = (
    {
        img,
        user,
        ...props
    }
) => {

    return (
        <figure className={styles.wrapper} {...props}>
            <Skeleton height="64px" width="64px" borderRadius={14} isLoaded>
                <Image onLoad={() => console.log("test")} className={styles.image} src={img} alt=""/>
            </Skeleton>
            <figcaption className="">
            </figcaption>
        </figure>
    );
};

export default UserBlock;
