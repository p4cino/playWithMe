import React, { FunctionComponent } from 'react';
import {callPageEvent} from "../../common/utils/callPageEvent";

export type OuterElementType = 'block' | 'inline';

type Props = {
    children: any;
    type?: OuterElementType;
    className?: string;
    eventData?: {};
};

const CallPageAction: FunctionComponent<Props> = ({ type = 'block', children, eventData = {}, className = '' }) => {
    const TagName = type === 'block' ? 'div' : 'span';
    const handleClick = () => {
        callPageEvent();
    };
    return (
        <TagName onClick={handleClick} className={className}>
            {children}
        </TagName>
    );
};

export default CallPageAction;
