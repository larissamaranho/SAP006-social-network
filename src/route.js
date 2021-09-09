export const route = (state) => {
    window.history.pushState({}, "", state)
    const popStateEvent = new PopStateEvent("popstate", { state: {} });
    dispatchEvent(popStateEvent);
}