import React, {FunctionComponent} from 'react';

import styles from './Text.module.scss';

interface Props {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'a' | 'strong' | 'span' | 'li';

    [key: string]: any;
}

const Text: FunctionComponent<Props> = ({tag = 'p', children, ...props}) => {
    const TagName = tag;

    return (
        <>
            <TagName
                className={styles.text} {...props}>
                {children}
            </TagName>
        </>
    );
};

export default Text;
