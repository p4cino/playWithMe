import React, {FunctionComponent} from 'react';

import styles from './CarouselIconBox.module.scss';
import Text from "../Text/Text";
import {analyticsDispatchEvent} from "../../common/utils/analyticsDispatchEvent";
import CallPageAction from "../CallPageAction/CallPageAction";
import {analyticsGtmEvent} from "../../common/utils/analyticsGtmEvent";

interface Props {
    data: [
        {
            fields: {
                id: number,
                iconUrl: string,
                description: string,
            },
        }
    ];
    clientType?: string;
    promoName?: string;
}

const CarouselIconBox: FunctionComponent<Props> = (
    {
        data,
        clientType,
        promoName
    }
) => {
    if (data !== undefined) {
        return (
            <div className={styles.whiteBackground}>
                <div className={styles.heading}>
                    <Text>
                        Jak wziąć udział
                    </Text>
                </div>
                <ul className={styles.circleWrapper}>
                    {data.map((item, index: number) => (
                        <li key={`CarouselIconBox-${index}-${item.fields.id}`} className={styles.circle}>
                            <div className={styles.circleIcon}>
                                <img src={item.fields.iconUrl} alt=""/>
                            </div>
                            <div className={styles.circleDesc}>
                                <Text dangerouslySetInnerHTML={{__html: item.fields.description}}/>
                            </div>
                            {index === 2 && (
                                <CallPageAction>
                                    <button onClick={() => {
                                        analyticsDispatchEvent('event-trigger', {
                                            events: 'event120',
                                            products: ';' + promoName + ';' + 1 + ';',
                                            eVar139: 'wof;' + clientType + ';leadcalled'
                                        });
                                        analyticsGtmEvent("eventST", {
                                            promoName: promoName,
                                        });
                                        analyticsGtmEvent("promotionClick", {
                                            ecommerce: {promoClick: {promotions: [{id: promoName}]}},
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
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        );
    } else {
        return (<></>);
    }
};

export default CarouselIconBox;
