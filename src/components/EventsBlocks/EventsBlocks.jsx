import React from 'react';

import styles from './EventsBlocks.module.scss';
import Heading from "../Heading/Heading";
import EventBlock from "../EventBlock/EventBlock";
import SliderGlide from "../SliderGlide/SliderGlide";


class EventsBlocks extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        // };
    }

    componentDidMount() {
    }

    render() {
        const options = {
            type: 'slider',
            startAt: 0,
            peek: {
                before: 0,
                after: 85
            },
            gap: 35,
            perView: 1,
            classes: {
                activeSlide: styles.activeSlide,
            }
        };

        return (
            <div className={styles.wrapper}>
                <div className={styles.heading}>
                    <Heading>Matched Events</Heading>
                </div>
                <SliderGlide options={options}>
                    <div>
                        <EventBlock/>
                    </div>
                    <div>
                        <EventBlock/>
                    </div>
                    <div>
                        <EventBlock/>
                    </div>
                    <div>
                        <EventBlock/>
                    </div>
                </SliderGlide>
            </div>
        );
    }
}

export default EventsBlocks;
