import React, {FunctionComponent} from 'react';
import {Image} from "@chakra-ui/core";
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

    return (
        <figure onClick={() => history.replace(`/profile/${id}`)} className={styles.wrapper} {...props}>
            <Image className={styles.image} src={img} alt=""/>
            <figcaption className="">
            </figcaption>
        </figure>
    );
};

export default UserBlock;
