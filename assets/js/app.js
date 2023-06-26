import { CreatHeader } from "./components/Header.js";  
import { CreatMain } from "./components/Main.js";  
 
let App = { 
    components : {  
        CreatHeader,
        CreatMain
    },
    template: `
        <CreatHeader />
        <CreatMain />
    `
};

export { App };