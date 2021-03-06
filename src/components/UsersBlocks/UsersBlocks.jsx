import React, {useContext, useEffect, useState} from 'react';

import styles from './UsersBlocks.module.scss';
import Heading from "../Heading/Heading";
import SliderGlide from "../SliderGlide/SliderGlide";
import UserBlock from "../UserBlock/UserBlock";
import {AppContext} from "../../App";
import API from "../../api";
import {Skeleton} from "@chakra-ui/core";

function UsersBlocks() {
    const context = useContext(AppContext);
    const [users, setUsers] = useState([]);

    const getData = async () => {
        await API.get(`profile/${context.userID}/followed`)
            .then(response => {
                setUsers(response.data.concat(response.data));
            })
            .catch(error => {
                console.log('Woops', error);
            });
    };

    useEffect(() => {
        getData();
    }, [context]);

    const options = {
        type: 'carousel',
        startAt: 0,
        peek: {
            before: 20,
            after: -28
        },
        gap: 20,
        perView: 5,
        classes: {
            activeSlide: styles.activeSlide,
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <Heading>Followed Players</Heading>
            </div>
            {users.length !== 0 && (
                <SliderGlide options={options}>
                    {users.map((user, index) => {
                            return (
                                <div key={`UserssBlock-${index}`}>
                                    <UserBlock id={user.id} img={user.profilePhotoUrl}/>
                                </div>
                            )
                        }
                    )}
                </SliderGlide>
            )}
            {users.length === 0 && (
                <SliderGlide options={options}>
                    <div><Skeleton height="64px"/></div>
                    <div><Skeleton height="64px"/></div>
                    <div><Skeleton height="64px"/></div>
                    <div><Skeleton height="64px"/></div>
                    <div><Skeleton height="64px"/></div>
                </SliderGlide>
            )}
        </div>
    );
}

export default UsersBlocks;
