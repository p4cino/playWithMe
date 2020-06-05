import React from 'react';

import styles from './MembersList.module.scss';
import Heading from "../Heading/Heading";
import {Text, Icon, Avatar} from "@chakra-ui/core/";

class MembersList extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>

                <div className={styles.row}>
                    <div className={styles.heading}>
                        <Heading>Players</Heading>
                    </div>
                    <div className={styles.counter}>
                        <div className={styles.counterItem}>
                            <Text fontWeight="bold">4 / 20</Text>
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
                               <Avatar size="xs" name="Segun Adebayo" src="https://bit.ly/dan-abramov" />
                           </div>
                            <div className={styles.listUser}>
                                <Text>Kola Tioluwani</Text>
                            </div>
                            <div className={styles.listUserType}>
                                <Text>Followed</Text>
                            </div>
                        </li>
                        <li className={styles.listItem}>
                           <div className={styles.listAvatar}>
                               <Avatar size="xs" name="Segun Adebayo" src="https://bit.ly/code-beast" />
                           </div>
                            <div className={styles.listUser}>
                                <Text>Christian Nwamba</Text>
                            </div>
                            <div className={styles.listUserType}>
                                <Text>Followed</Text>
                            </div>
                        </li>
                        <li className={styles.listItem}>
                           <div className={styles.listAvatar}>
                               <Avatar size="xs" name="Segun Adebayo" src="" />
                           </div>
                            <div className={styles.listUser}>
                                <Text>Andrzej Urbański</Text>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MembersList;
