import React from 'react';

import styles from './UsersBlocks.module.scss';
import Heading from "../Heading/Heading";
import SliderGlide from "../SliderGlide/SliderGlide";
import UserBlock from "../UserBlock/UserBlock";
import robert from '../../assets/images/robert.png'

class UsersBlocks extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     };
    // }

    // componentDidMount() {
    // }

    render() {
        const options = {
            type: 'carousel',
            startAt: 0,
            peek: {
                before: 16,
                after: -28
            },
            gap: 24,
            perView: 5,
            classes: {
                activeSlide: styles.activeSlide,
            }
        };

        return (
            <div className={styles.wrapper}>
                <div className={styles.heading}>
                    <Heading>Followed Users</Heading>
                </div>
                <SliderGlide options={options}>
                    <div>
                        <UserBlock img={robert}/>
                    </div>
                    <div>
                        <UserBlock img={robert}/>
                    </div>
                    <div>
                        <UserBlock img={robert}/>
                    </div>
                    <div>
                        <UserBlock img={robert}/>
                    </div>
                    <div>
                        <UserBlock img={robert}/>
                    </div>
                    <div>
                        <UserBlock img={robert}/>
                    </div>
                    <div>
                        <UserBlock img={robert}/>
                    </div>
                    <div>
                        <UserBlock img={robert}/>
                    </div>
                </SliderGlide>
            </div>
        );
    }
}

export default UsersBlocks;
