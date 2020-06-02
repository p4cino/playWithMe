import React from 'react';
import HamburgerMenu from "react-hamburger-menu";

import styles from "./Navigation.module.scss";
import robert from "../../assets/images/robert.png";
import {Text} from "@chakra-ui/core/";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    hamburgerClick = () => {
        console.log("click");
    };

    componentDidMount() {
    }

    render() {
        // const {profiles} = this.state;

        return (
            <div className={styles.wrapper}>
                <HamburgerMenu
                    isOpen={this.state.open}
                    menuClicked={() => this.setState({open: !this.state})}
                    width={18}
                    height={15}
                    strokeWidth={2}
                    rotate={0}
                    color='black'
                    borderRadius={0}
                    animationDuration={0.5}
                />

                <div className={styles.avatar}>
                    <img src={robert} alt=""/>
                    <div className={styles.avatarBadge}>
                        <Text fontSize="xs">3</Text>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;
