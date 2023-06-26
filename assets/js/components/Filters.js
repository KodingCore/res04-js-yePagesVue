import { Library } from "../data/library.js";
import { bookList } from "../data/data-books.js";

let CreatFilters = {
    data () {  
        return {  
            filters : []  
        }  
    },
    setup(){
        const newShelf = new Library();
        let filters = [];
        newShelf.load(bookList);
        let genreIsFind = false;
        for(let book of newShelf.shelf){
            for(let filter of filters){
                if(filter === book.genre){
                    genreIsFind = true;
                }
            }
            if(!genreIsFind){
                filters.push(book.genre);
            }else{
                genreIsFind = false;
            }
        }
        console.log(filters);
        return { filters };
    },
    template: `  
    <li v-for="filter in filters">{{ filter }}</li>
    `
}

export { CreatFilters };