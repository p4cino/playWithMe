import React, {FunctionComponent, useEffect, useState} from 'react';
// @ts-ignore
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import styles from './Carousel.module.scss';
import SwiperCarousel from "../SwiperCarousel/SwiperCarousel";
import CarouselPriceBox from "../CarouselPriceBox/CarouselPriceBox";
import Text from "../Text/Text";

const Carousel: FunctionComponent = (
    {
        children, ...props
    }
) => {

    const [item, setActiveItem] = useState(0);
    const [tabIndex, settabIndex] = useState(0);
    const [slides, setSlides] = useState();
    const [circles, setCircles] = useState();
    const [slidesNew, setSlidesNew] = useState();
    const [circlesNew, setCirclesNew] = useState();
    const [slidesType, setSlidesType] = useState("existing");

    const contentful = require("contentful");
    const client = contentful.createClient({
        space: "a0ikjbnvyj37",
        accessToken: "hyBf_KcdLeKb97n8M5xEr1PJAqUW-Xpjua21y4XV7FU"
    });

    useEffect(() => {
        const url = new URL(document.location.href);
        const searchParams = new URLSearchParams(url.search);

        //Routing when in href isset ?:promo || ?:client
        if (searchParams.get('promo') !== null) {
            const ID = searchParams.get('promo');
            setActiveItem(parseInt(typeof ID === "string" ? ID : "0"));
        }
        if (searchParams.get('client') !== null) {
            const hrefType = searchParams.get('client')
            hrefType === "new" ? settabIndex(1) : settabIndex(0);
            setSlidesType("new");
        }

        client.getEntries({
            limit: 10,
            order: 'fields.sequence',
            content_type: 'carouselSlides',
            'fields.clientType[nin]': "new"
        })
            .then(function (entries: any) {
                setSlides(entries.items);
            });

        client.getEntries({
            limit: 10,
            order: 'fields.sequence',
            content_type: 'carouselCircle',
            'fields.clientType[nin]': "new"
        })
            .then(function (entries: any) {
                setCircles(entries.items);
            });

        client.getEntries({
            limit: 10,
            order: 'fields.sequence',
            content_type: 'carouselSlides',
            'fields.clientType[nin]': "current"
        })
            .then(function (entries: any) {
                setSlidesNew(entries.items);
            });

        client.getEntries({
            limit: 10,
            order: 'fields.sequence',
            content_type: 'carouselCircle',
            'fields.clientType[nin]': "current"
        })
            .then(function (entries: any) {
                setCirclesNew(entries.items);
            });

    }, []);

    const changeActiveSlide = (val: number) => {
        setActiveItem(val);
    };

    if (slides !== undefined && slidesNew !== undefined) {
        return (
            <div className={styles.wrapper} {...props}>

                <Tabs selectedIndex={tabIndex} onSelect={(tabIndex: number) => settabIndex(tabIndex)}>
                    <TabList>
                        <Tab onClick={() => {
                            setActiveItem(0);
                            setSlidesType("existing");
                        }}>
                            <Text>
                                Dla obecnych klientów
                            </Text>
                        </Tab>
                        <Tab onClick={() => {
                            setActiveItem(0);
                            setSlidesType("new");
                        }}>
                            <Text>
                                Dla nowych klientów
                            </Text>
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <>
                            <SwiperCarousel
                                initialSlide={item}
                                data={slides}
                                cons={changeActiveSlide}
                                type={slidesType}
                            />
                            <CarouselPriceBox data={slides[item]} circles={circles}/>
                        </>
                    </TabPanel>
                    <TabPanel>
                        <>
                            <SwiperCarousel
                                initialSlide={item}
                                data={slidesNew}
                                cons={changeActiveSlide}
                                type={slidesType}
                            />
                            <CarouselPriceBox data={slidesNew[item]} circles={circlesNew}/>
                        </>
                    </TabPanel>
                </Tabs>
            </div>
        );
    } else return (<></>);
};

export default Carousel;
