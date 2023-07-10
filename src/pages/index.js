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
import '../theme/theme'

const width = window.innerWidth;

document.addEventListener("DOMContentLoaded",async () => {
    const menu = document.querySelector("md-menu");

    document.querySelector("md-fab").addEventListener("click",()=>{
        const event = new Event('open', {bubbles: true, composed: true});
        menu.dispatchEvent(event);
    });
    menu.anchor = document.querySelector("md-fab");
    if(width<800) {
        menu.anchorСorner = "START_END";
        menu.menuCorner="END_END";
        menu.xOffset=-40;
        menu.yOffset=15;
    }
    document.querySelector("md-menu").addEventListener("open",(e)=>{
        e.target.open = true;
    })
})

window.addEventListener("resize", (event) => {
    const width = event.target.innerWidth;
    console.log(width);
    const menu = document.querySelector("md-menu");
    if(width<800) {
        menu.anchorСorner = "START_END";
        menu.menuCorner="END_END";
        menu.xOffset=-40;
        menu.yOffset=15;
    } else {
        menu.anchorСorner = "END_START";
        menu.menuCorner="START_START";
        menu.xOffset=-80;
        menu.yOffset=-56;
    }
});
