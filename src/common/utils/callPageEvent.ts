export function callPageEvent() {
    const win = window as any;

    if (typeof win.callpage !== 'undefined' && typeof win.callpage === 'function') {
        win.callpage('api.widget.open');
    }
}
