export function analyticsGtmEvent(eventName: string, eventData: { [key: string]: any }) {
    const win = window as any;
    // console.log("Event: ", eventName, "eventData", eventData);

    if (typeof win.dataLayer !== 'undefined' && typeof win.dataLayer.push === 'function' && typeof win.callpage !== 'undefined' && typeof win.callpage === 'function') {
        if (eventName === "eventST") {
            win.callpage('event.onCallCreated', function (call: any) {
                // console.log("call");
                Object.keys(eventData).forEach(item => {
                    win.dataLayer.push({
                        'event': eventName,
                        'promoName': eventData[item],
                    });
                });
            });
        } else {
            Object.keys(eventData).forEach(item => {
                win.dataLayer.push({
                    'event': eventName,
                    'promoName': eventData[item],
                });
            });
        }
    }
}
