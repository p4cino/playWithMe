import React, { FunctionComponent } from 'react';

import styles from './A11yText.module.scss';

interface Props {
    tag?: 'p' | 'span';
}

const A11yText: FunctionComponent<Props> = ({ tag = 'span', children, ...props }) => {
    const TagName = tag;

    return (
        <TagName className={styles.a11y} {...props}>
            {children}
        </TagName>
    );
};

export default A11yText;
