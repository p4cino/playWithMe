import React from 'react';

import styles from './MembersList.module.scss';
import Heading from "../Heading/Heading";
import {Text, Icon, Avatar} from "@chakra-ui/core/";

class MembersList extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     };
    // }

    // componentDidMount() {
    // }

    render() {

        return (
            <div className={styles.wrapper}>

                <div className={styles.row}>
                    <div className={styles.heading}>
                        <Heading>Members</Heading>
                    </div>
                    <div className={styles.counter}>
                        <div className={styles.counterItem}>
                            <Text fontWeight="bold">5 / 20</Text>
                        </div>
                        <div className={styles.counterItem}>
                            <Icon size="20px" name="newMember"/>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <div className={styles.listAvatar}>
                                <Avatar size="xs" name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                            </div>
                            <div className={styles.listUser}>
                                <Text>Artur Urbański</Text>
                            </div>
                            <div className={styles.listUserType}>
                                <Text>Host</Text>
                            </div>
                        </li>
                        <li className={styles.listItem}>
                           <div className={styles.listAvatar}>
                               <Avatar size="xs" name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                           </div>
                            <div className={styles.listUser}>
                                <Text>Artur Urbański</Text>
                            </div>
                            <div className={styles.listUserType}>
                                <Text>Host</Text>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MembersList;
