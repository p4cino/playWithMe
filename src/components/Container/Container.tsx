import React from 'react';

import styles from './Container.module.scss';

interface MyProps { }

function Container(props: React.PropsWithChildren<MyProps>) {
    return <div className={styles.container} {...props}>{props.children}</div>;
}

export default Container;
