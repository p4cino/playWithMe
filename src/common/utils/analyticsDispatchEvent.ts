export type customEventName = 'event-click' | 'event-page-load' | 'event-trigger';

export function analyticsDispatchEvent(eventName: customEventName, eventData: { [key: string]: any }) {
    const win = window as any;
    // console.log(eventData);

    if (typeof win.s !== 'undefined' && typeof win.s.tl === 'function') {
        win.s.clearVars();
        Object.keys(eventData).forEach(item => {
            win.s[item] = eventData[item];
        });
        win.s.tl();
    }
}
