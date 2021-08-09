import { home } from "./pages/home/home.js";
import { registration } from "./pages/registration/registration.js";
import { login } from "./pages/login/login.js";
import { feed } from "./pages/feed/feed.js";

const routeRender = () => {
    const root = document.getElementById("root")
    const routes = {
        "/": home,
        "/login": login,
        "/registration": registration,
        "/feed": feed,
    }
    root.innerHTML = ""
    root.appendChild(routes[window.location.pathname]())
    console.log(window.location.pathname)
    //console.log(routes[window.location.pathname])
}

window.addEventListener("popstate", routeRender);

window.addEventListener('load', routeRender)
export const route = (state) => {
    window.history.pushState({}, "", state)
    const popStateEvent = new PopStateEvent("popstate", { state: {} });
    dispatchEvent(popStateEvent);
}
console.log("pegou")
