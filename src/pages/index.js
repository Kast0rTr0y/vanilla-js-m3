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

document.addEventListener("DOMContentLoaded",async () => {
    document.querySelector("md-fab").addEventListener("click",()=>{
        const event = new Event('open', {bubbles: true, composed: true});
        document.querySelector("md-menu").dispatchEvent(event);
    });
    document.querySelector("md-menu").anchor = document.querySelector("md-fab");
    document.querySelector("md-menu").addEventListener("open",(e)=>{
        e.target.open = true;
    })
})