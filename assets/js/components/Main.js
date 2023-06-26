import { CreatArticles } from "./Article.js";
import { CreatFilters } from "./Filters.js";

let CreatMain = {
    components : {
        CreatArticles,
        CreatFilters
    },
    template: `  
        <main class="container">      
            <aside>
                <h3>FILTRES</h3>
                <h4>Catégories</h4>
                <ul id="tabCateg">
                    <CreatFilters/>
                </ul>
            </aside>
            <div>
                <h3 id="subtitleMain">Découvrez <span id="subtitle">nos ouvrages</span></h3>
                <section id="discover">

                </section>
                <h3 id="relationTitle" class="d-none">D'autre livres dans la catégorie <span id="relationTitleSpan"></span></h3>
                <section id="relations">

                </section>
                <section id="library">
                    <CreatArticles/>
                </section>
                <h3 id="filterTitle" class="d-none">Les livres de la catégorie <span id="filterTitleSpan"></span></h3>
                <section id="filter">
                    
                </section>
                <button id="lastBtn">PARCOURIR LA COLLECTION</button>
            </div>
        </main>
    `,
}

export { CreatMain };