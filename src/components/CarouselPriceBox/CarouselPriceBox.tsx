import React, {FunctionComponent, useEffect} from 'react';

import ReactTooltip from "react-tooltip";

import styles from './CarouselPriceBox.module.scss';
import Text from "../Text/Text";
import CarouselIconBox from "../CarouselIconBox/CarouselIconBox";
import Container from "../Container/Container";
import {analyticsDispatchEvent} from "../../common/utils/analyticsDispatchEvent";
import CallPageAction from "../CallPageAction/CallPageAction";
import {analyticsGtmEvent} from "../../common/utils/analyticsGtmEvent";

interface Props {
    data: any;
    circles: any;
}

const CarouselPriceBox: FunctionComponent<Props> = (
    {
        data,
        circles,
        ...props
    }
) => {
    useEffect(() => {
        if (data !== null || undefined) {
            //recalculate tooltip render
            ReactTooltip.rebuild();
        }
    }, [data]);

    if (data !== undefined) {
        return (
            <>
                <div className={styles.graySection}>
                    <Container>
                        <div className={styles.wrapper} {...props}>
                            <div className={styles.column}>
                                <h2 className={styles.title}>
                                    <Text>
                                        {data.fields.title}
                                    </Text>
                                </h2>
                                <div className={styles.price}>
                                    <Text>
                                        {data.fields.price}<span className={styles.priceMonth}>zł/mies.</span>
                                    </Text>
                                </div>
                                <div className={styles.activationPrice}>
                                    <Text>
                                        Aktywacja {data.fields.activation === 0 ? 0 : data.fields.activation.toFixed(2)} zł
                                    </Text>
                                </div>
                                {data.fields.agreementDesc && (
                                    <div className={styles.descriptionPrice}>
                                        <Text>
                                            {data.fields.agreementDesc}
                                        </Text>
                                    </div>
                                )}
                            </div>
                            <div className={styles.listColumn}>
                                <ul className={styles.list}>
                                    {data.fields.sliderDescription.map((item: { fields: { tooltip?: string; description: string; }; }, index: any) => {
                                        return index <= 2 ?
                                            item.fields.tooltip ? (
                                                <li style={{cursor: "help"}} data-tip={item.fields.tooltip}
                                                    key={`List-${index}`}
                                                    className={styles.listItem}>
                                                    <Text style={{display: "inline"}}
                                                          dangerouslySetInnerHTML={{__html: item.fields.description}}/>
                                                    <div className={styles.listIcon}>
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="8" cy="8" r="7.5" fill="white"
                                                                    stroke="#239A98"/>
                                                            <path
                                                                d="M7.624 12.07C7.456 12.07 7.316 12.0233 7.204 11.93C7.10133 11.8273 7.05 11.6873 7.05 11.51V5.602C7.05 5.42467 7.10133 5.28933 7.204 5.196C7.316 5.09333 7.456 5.042 7.624 5.042C7.792 5.042 7.92733 5.09333 8.03 5.196C8.13267 5.28933 8.184 5.42467 8.184 5.602V11.51C8.184 11.6967 8.13267 11.8367 8.03 11.93C7.92733 12.0233 7.792 12.07 7.624 12.07ZM7.624 3.572C7.4 3.572 7.218 3.50667 7.078 3.376C6.938 3.24533 6.868 3.07267 6.868 2.858C6.868 2.65267 6.938 2.48467 7.078 2.354C7.218 2.22333 7.4 2.158 7.624 2.158C7.848 2.158 8.03 2.22333 8.17 2.354C8.31 2.48467 8.38 2.65267 8.38 2.858C8.38 3.07267 8.31 3.24533 8.17 3.376C8.03 3.50667 7.848 3.572 7.624 3.572Z"
                                                                fill="#239A98"/>
                                                        </svg>
                                                    </div>
                                                </li>
                                            ) : (
                                                <li key={`List-${index}`} className={styles.listItem}>
                                                    <Text style={{display: "inline"}}
                                                          dangerouslySetInnerHTML={{__html: item.fields.description}}/>
                                                </li>
                                            )
                                            :
                                            <></>
                                    })}
                                </ul>
                            </div>
                            {data.fields.sliderDescription.length > 3 && (
                                <div className={styles.listColumn}>
                                    <ul className={styles.list}>
                                        {data.fields.sliderDescription.map((item: { fields: { tooltip?: string; description: string; }; }, index: any) => {
                                            return index > 2 ?
                                                item.fields.tooltip ? (
                                                    <li style={{cursor: "help"}} data-tip={item.fields.tooltip + index}
                                                        key={`List-${index}`}
                                                        className={styles.listItem}>
                                                        <Text style={{display: "inline"}}
                                                              dangerouslySetInnerHTML={{__html: item.fields.description}}/>
                                                        <div className={styles.listIcon}>
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="8" cy="8" r="7.5" fill="white"
                                                                        stroke="#239A98"/>
                                                                <path
                                                                    d="M7.624 12.07C7.456 12.07 7.316 12.0233 7.204 11.93C7.10133 11.8273 7.05 11.6873 7.05 11.51V5.602C7.05 5.42467 7.10133 5.28933 7.204 5.196C7.316 5.09333 7.456 5.042 7.624 5.042C7.792 5.042 7.92733 5.09333 8.03 5.196C8.13267 5.28933 8.184 5.42467 8.184 5.602V11.51C8.184 11.6967 8.13267 11.8367 8.03 11.93C7.92733 12.0233 7.792 12.07 7.624 12.07ZM7.624 3.572C7.4 3.572 7.218 3.50667 7.078 3.376C6.938 3.24533 6.868 3.07267 6.868 2.858C6.868 2.65267 6.938 2.48467 7.078 2.354C7.218 2.22333 7.4 2.158 7.624 2.158C7.848 2.158 8.03 2.22333 8.17 2.354C8.31 2.48467 8.38 2.65267 8.38 2.858C8.38 3.07267 8.31 3.24533 8.17 3.376C8.03 3.50667 7.848 3.572 7.624 3.572Z"
                                                                    fill="#239A98"/>
                                                            </svg>
                                                        </div>
                                                    </li>
                                                ) : (
                                                    <li key={`List-${index}`} className={styles.listItem}>
                                                        <Text style={{display: "inline"}}
                                                              dangerouslySetInnerHTML={{__html: item.fields.description}}/>
                                                    </li>
                                                )
                                                :
                                                <></>
                                        })}
                                    </ul>
                                </div>
                            )}
                            <ReactTooltip className={styles.toolTip} effect={"solid"} border={true} borderColor={"gray"}
                                          textColor={"black"} backgroundColor={"white"}/>
                        </div>
                    </Container>
                    <div className={styles.buttonWrapper}>
                        <CallPageAction>
                            <button onClick={() => {
                                analyticsDispatchEvent('event-click', {
                                    events: 'event120',
                                    products: ';' + data.fields.id + ';' + 1 + ';',
                                    eVar139: 'wof;' + data.fields.clientType + ';leadcalled'
                                });
                                analyticsGtmEvent("eventST", {
                                    promoName: data.fields.id,
                                });
                                analyticsGtmEvent("promotionClick", {
                                    ecommerce: {promoClick: {promotions: [{id: data.fields.id}]}},
                                });
                            }} className={styles.button}>
                                <div className={styles.buttonDesktop}>
                                    <Text>
                                        Skorzystaj z promocji
                                    </Text>
                                </div>
                                <div className={styles.buttonMobile}>
                                    <Text>
                                        Skorzystaj
                                    </Text>
                                </div>
                            </button>
                        </CallPageAction>
                    </div>
                </div>
                <Container>
                    <CarouselIconBox data={circles} clientType={data.fields.clientType} promoName={data.fields.id}/>
                </Container>
            </>
        );
    } else {
        return (<></>);
    }
};

export default CarouselPriceBox;
