import React, {useEffect, useState} from 'react';

import {Swiper, Pagination, EffectCoverflow} from 'swiper/js/swiper.esm';
import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom';

import styles from './SwiperCarousel.module.scss';
import A11yText from "../A11yText/A11yText";
import Text from "../Text/Text";
import {analyticsDispatchEvent} from "../../common/utils/analyticsDispatchEvent";
import Container from "../Container/Container";
import {analyticsGtmEvent} from "../../common/utils/analyticsGtmEvent";


const SwiperCarousel = ({initialSlide, data, cons, type}) => {
    const [swiper, updateSwiper] = useState(null);
    const [currentIndex, updateCurrentIndex] = useState(0);

    const goNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
            analyticsDispatchEvent('event-click', {
                eVar139: 'wof;' + data[currentIndex].fields.clientType + ';slide-right',
                events: 'event120',
                products: ';' + data[currentIndex].fields.id + ';' + 1 + ';'
            });
            if (currentIndex + 1 <= data.length - 1) {
                analyticsGtmEvent("promoView", {
                    ecommerce: {
                        promoView: {
                            promotions: [{
                                id: data[currentIndex + 1].fields.id,
                                name: data[currentIndex + 1].fields.title,
                                creative: data[currentIndex + 1].fields.clientType,
                                position: data[currentIndex + 1].fields.sequence
                            }]
                        }
                    },
                });
            } else {
                analyticsGtmEvent("promoView", {
                    ecommerce: {
                        promoView: {
                            promotions: [{
                                id: data[0].fields.id,
                                name: data[0].fields.title,
                                creative: data[0].fields.clientType,
                                position: data[0].fields.sequence
                            }]
                        }
                    },
                });
            }
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
            analyticsDispatchEvent('event-trigger', {
                eVar139: 'wof;' + data[currentIndex].fields.clientType + ';slide-left',
                events: 'event120',
                products: ';' + data[currentIndex].fields.id + ';' + 1 + ';'
            });

            if (currentIndex !== 0) {
                analyticsGtmEvent("promoView", {
                    ecommerce: {
                        promoView: {
                            promotions: [{
                                id: data[currentIndex - 1].fields.id,
                                name: data[currentIndex - 1].fields.title,
                                creative: data[currentIndex - 1].fields.clientType,
                                position: data[currentIndex - 1].fields.sequence
                            }]
                        }
                    },
                });
            } else {
                analyticsGtmEvent("promoView", {
                    ecommerce: {
                        promoView: {
                            promotions: [{
                                id: data[data.length - 1].fields.id,
                                name: data[data.length - 1].fields.title,
                                creative: data[data.length - 1].fields.clientType,
                                position: data[data.length - 1].fields.sequence
                            }]
                        }
                    },
                });
            }
        }
    };

    const params = {
        Swiper,
        modules: [Pagination, EffectCoverflow],
        WrapperEl: "ul",
        effect: "coverflow",
        initialSlide: initialSlide,
        centeredSlides: true,
        slidesPerView: "auto",
        grabCursor: true,
        lazyLoading: false,
        coverflowEffect: {
            rotate: -5,
            stretch: 200,
            depth: 250,
            modifier: 1,
            slideShadows: true
        },
        loop: true,
        simulateTouch: true,
        mousewheelControl: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        getSwiper: updateSwiper,
    }

    //Initial slide option
    useEffect(() => {
        if (swiper !== null || undefined) {
            analyticsDispatchEvent('event-trigger', {
                eVar139: 'wof;' + data[currentIndex].fields.clientType + ';loaded',
                events: 'event120',
                products: ';' + data[currentIndex].fields.id + ';' + 1 + ';',
            });
            analyticsGtmEvent("promoView", {
                ecommerce: {
                    promoView: {
                        promotions: [{
                            id: data[currentIndex].fields.id,
                            name: data[currentIndex].fields.title,
                            creative: data[currentIndex].fields.clientType,
                            position: data[currentIndex].fields.sequence
                        }]
                    }
                },
            });
            swiper.on("slideChange", () => {
                updateCurrentIndex(swiper.realIndex);
                cons(swiper.realIndex);
            });
        }

        return () => {
            if (swiper !== null || undefined) {
                swiper.off("slideChange", () => updateCurrentIndex(swiper.realIndex));
                cons(swiper.realIndex);
            }
        };
    }, [swiper]);

    //When type is changed reset state
    useEffect(() => {
        if (type !== null || undefined) {
            cons(0);
        }
    }, [swiper]);

    if (data !== undefined) {
        return (
            <div className={styles.graySection}>
                <Container>
                    <div className={styles.wrapper}>
                        <ReactIdSwiperCustom {...params}>
                            {data && data.map((item, index) => (
                                <li key={`Slide-${index}`} className={styles.swiperSlide}>
                                    {item.fields.leftCircle && (
                                        <div className={styles.leftCircle}>
                                            <ul className={styles.circleList}>
                                                {item.fields.leftCircle.content.map((item, index) => (
                                                    <li key={`LeftCircle-${index}-${item.id}`}
                                                        className={styles.circleListItem}>
                                                        <Text
                                                            dangerouslySetInnerHTML={{__html: item.content[0].value}}/>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    <div className={styles.slideBody}>
                                        <div className={styles.slideHeader}>
                                            {item.fields.subtitle}
                                        </div>
                                        <div className={styles.slideImageContainer}>
                                            <div className={styles.image}>
                                                <img
                                                    src={item.fields.img}
                                                    alt=""/>
                                            </div>
                                            {item.fields.img2 && (
                                                <div className={styles.image}>
                                                    <img
                                                        src={item.fields.img2}
                                                        alt=""/>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {item.fields.rightCircle && (
                                        <div className={styles.rightCircle}>
                                            <ul className={styles.circleList}>
                                                {item.fields.rightCircle.content.map((item, index) => (
                                                    <li key={`RightCircle-${index}-${item.id}`}
                                                        className={styles.circleListItem}>
                                                        <Text
                                                            dangerouslySetInnerHTML={{__html: item.content[0].value}}/>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ReactIdSwiperCustom>
                    </div>
                    <button
                        className="swiper-nav-button swiper-button-prev"
                        onClick={goPrev}
                    >
                        <div className="swiper-icon">
                            <svg width="14" height="25" viewBox="0 0 14 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.7501 3.74994C13.4404 3.05961 13.4404 1.94037 12.7501 1.25003C12.0597 0.559666 10.9404 0.559666 10.2501 1.25003L1.50042 10C0.119546 11.3806 0.119546 13.6194 1.50042 15L10.2501 23.75C10.9404 24.4403 12.0597 24.4403 12.7501 23.75C13.4404 23.0596 13.4404 21.9404 12.7501 21.2501L6.82842 15.3284C5.26633 13.7663 5.26633 11.2337 6.82843 9.67157L12.7501 3.74994Z"
                                    fill="white"/>
                            </svg>
                        </div>
                        <A11yText>
                            Poprzedni Slajd
                        </A11yText>
                    </button>
                    <button
                        className="swiper-nav-button swiper-button-next"
                        onClick={goNext}
                    >
                        <div className="swiper-icon">
                            <svg width="14" height="25" viewBox="0 0 14 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.24994 3.74994C0.559615 3.05961 0.559607 1.94037 1.24992 1.25003C1.94027 0.559666 3.05956 0.559666 3.7499 1.25003L12.4996 10C13.8805 11.3806 13.8805 13.6194 12.4996 15L3.7499 23.75C3.05956 24.4403 1.94027 24.4403 1.24992 23.75C0.559607 23.0596 0.559617 21.9404 1.24995 21.2501L7.17158 15.3284C8.73367 13.7663 8.73367 11.2337 7.17157 9.67157L1.24994 3.74994Z"
                                    fill="white"/>
                            </svg>
                        </div>
                        <A11yText>
                            Następny Slajd
                        </A11yText>
                    </button>
                </Container>
            </div>
        )
    } else {
        return (<></>);
    }
}

export default SwiperCarousel;
