import { Library } from "../data/library.js";
import { bookList } from "../data/data-books.js";

let CreatArticles = {
    data () {  
        return {  
            articles : []  
        }  
    },
    setup(){
        const newShelf = new Library();
        let articles = [];
        newShelf.load(bookList);
        for(let book of newShelf.shelf){
            articles.push(  
                {  
                    image : book.image,
                    title : book.title,
                    genre : book.genre,
                    author : book.author
                }
            )
        }
        return { articles };
    },
    template: `  
    <article v-for="article in articles" :article="article.article">
        <img :src="article.image"/>
        <h4>{{ article.title }}</h4>
        <p>{{ article.genre }}</p>
        <p>{{ article.author }}</p>
        <button>DECOUVRIR LE LIVRES</button>
    </article>
    `
}

export { CreatArticles };