let CreatMain = {
    template: `  
        <main class="container">      
            <aside>
                <h3>FILTRES</h3>
                <h4>Catégories</h4>
                <ul id="tabCateg">
                    
                </ul>
            </aside>
            <div>
                <h3 id="subtitleMain">Découvrez <span id="subtitle">nos ouvrages</span></h3>
                <section id="discover">

                </section>
                <h3 id="relationtitle">D'autre livres dans la catégorie <span id="relationtitleSpan"></span></h3>
                <section id="relations">

                </section>
                <section id="library">

                </section>
                <h3 id="filterTitle">Les livres de la catégorie <span id="filterTitleSpan"></span></h3>
                <section id="filter">
                    <li v-for="filter in filters" :filter="filter.filter"/>
                </section>
                <button id="lastBtn">PARCOURIR LA COLLECTION</button>
            </div>
        </main>
    `,
}

export { CreatMain };