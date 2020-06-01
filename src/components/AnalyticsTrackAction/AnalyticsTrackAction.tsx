import React, { FunctionComponent } from 'react';
import { analyticsDispatchEvent } from '../../common/utils/analyticsDispatchEvent';

export type OuterElementType = 'block' | 'inline';

type Props = {
    children: any;
    type?: OuterElementType;
    className?: string;
    eventData?: {};
};

const AnalyticsTrackAction: FunctionComponent<Props> = ({ type = 'block', children, eventData = {}, className = '' }) => {
    const TagName = type === 'block' ? 'div' : 'span';
    const handleClick = () => {
        analyticsDispatchEvent('event-click', eventData);
    };
    return (
        <TagName onClick={handleClick} className={className}>
            {children}
        </TagName>
    );
};

export default AnalyticsTrackAction;
