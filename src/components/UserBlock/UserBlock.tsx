import React, {FunctionComponent} from 'react';
import {Image} from "@chakra-ui/core";

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
            <Image className={styles.image} src={img} alt="" fallbackSrc="https://via.placeholder.com/64x64"/>
            <figcaption className="">
            </figcaption>
        </figure>
    );
};

export default UserBlock;
