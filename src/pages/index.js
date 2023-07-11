import '@material/web/menu/menu'
import '@material/web/menu/menu-item'
import '@material/web/fab/fab'
import '@material/web/icon/icon'
import '@material/web/iconbutton/standard-icon-button'
import '@material/web/labs/badge/badge'
import '@material/web/dialog/dialog'
import '@material/web/button/text-button'
import "vanilla-colorful"
import "../theme/theme.css"
import "../styles.css"
import '../widgets/simple'
import '../widgets/docs'
import '../widgets/card'
import '../widgets/large-card'
import '../widgets/divider'
import '../theme/theme'
import '../widgets/colors'
import '../widgets/search'
import '../widgets/user'

const width = window.innerWidth;

document.addEventListener("DOMContentLoaded",async () => {
    const menu1 = document.querySelector("#md-menu1");
    document.querySelector("md-fab").addEventListener("click",()=>{
        const event = new Event('open', {bubbles: true, composed: true});
        menu1.dispatchEvent(event);
    });
    menu1.anchor = document.querySelector("md-fab");
    if(width<800) {
        menu1.anchorСorner = "START_END";
        menu1.menuCorner="END_END";
        menu1.xOffset=-40;
        menu1.yOffset=15;
    }
    menu1.addEventListener("open",(e)=>{
        e.target.open = true;
    });

    const menu2 = document.querySelector("#md-menu2");
    document.querySelector("md-user").addEventListener("click",()=>{
        const event = new Event('open', {bubbles: true, composed: true});
        menu2.dispatchEvent(event);
    });
    menu2.anchor = document.querySelector("md-user");
    menu2.addEventListener("open",(e)=>{
        e.target.open = true;
    })

    const about = document.querySelector("#about");
    const dialog = document.querySelector("md-dialog");
    about.addEventListener("click", ()=>{
        dialog.show();
    })
})

window.addEventListener("resize", (event) => {
    const width = event.target.innerWidth;
    const menu = document.querySelector("#md-menu1");
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
