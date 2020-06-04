import React, {FunctionComponent} from 'react';
import {Image} from "@chakra-ui/core";

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
            <Image className={styles.image} src={img} alt=""/>
            <figcaption className="">
            </figcaption>
        </figure>
    );
};

export default UserBlock;
