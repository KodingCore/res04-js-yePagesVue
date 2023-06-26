import { CreatLinksNav } from "./NavLi.js";

let CreatHeader = {
    data () {  
        return {  
            links : [  
                {  
                    link : "ACCUEIL"
                },
                {  
                    link : "LIVRES" 
                },  
                {  
                    link : "COMPTES" 
                }
            ]  
        }  
    },
    components : {
        CreatLinksNav
    },
    template: `  
        <header>      
            <div class="headHeader">
                <div class="mark">
                    <img width="180" src="assets/images/Logo-Blanc.svg"/>
                </div>
                <nav class="nav">
                    <ul>
                        <CreatLinksNav v-for="link in links" :link="link.link"/>
                    </ul>
                </nav>
            </div>
            <div class="headBody">
                <div class="textHead">
                    <h1>YEPages</h1>
                    <h2 id="titrePage">La collection</h2>
                </div>
            </div>
        </header>
    `
}

export { CreatHeader };