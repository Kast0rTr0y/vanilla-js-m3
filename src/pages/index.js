import '@material/web/menu/menu'
import '@material/web/menu/menu-item'
import '@material/web/fab/fab'
import '@material/web/icon/icon'
import "vanilla-colorful"
import "../theme/theme.css"
import "../styles.css"
import '../widgets/simple'
import '../widgets/docs'
import '../widgets/card'
import '../widgets/large-card'
import '../widgets/divider'
import '../widgets/picker'
import {changeTheme} from '../theme/theme'

export function sleep(ms) {
    return new Promise((res) => setTimeout(res, ms));
}

const getCards = async () => {
    await sleep(1);
    return [
        {header:"header1",text:"test1",icon:"edit",iconText:'Icon text1',iconSubText:'Icon sub text1'},
        {header:"header2",text:"test2",iconText:'Icon text2',iconSubText:'Icon sub text2'},
        {text:"test3"}
    ];
}

document.addEventListener("DOMContentLoaded",async () => {
    document.querySelector("md-fab").addEventListener("click",()=>{
        const event = new Event('open', {bubbles: true, composed: true});
        document.querySelector("md-menu").dispatchEvent(event);
    });
    document.querySelector("md-menu").anchor = document.querySelector("md-fab");
    document.querySelector("md-menu").addEventListener("open",(e)=>{
        e.target.open = true;
    })
    document.getElementById("md-documents-1").cards = await getCards();
    document.getElementById("md-documents-2").cards = await getCards();
    document.getElementById("md-documents-3").cards = await getCards();
})

window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", ({ matches }) => {
        if (matches) {
            changeTheme();
        } else {
            changeTheme();
        }
    });