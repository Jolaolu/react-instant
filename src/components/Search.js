import React from 'react';
import algoliasearch from 'algoliasearch'
import { InstantSearch, SearchBox, RefinementList, Hits } from 'react-instantsearch-dom';
import './Search.css'


const searchClient = algoliasearch("latency", "6be0576ff61c053d5f9a3225e2a90f76")


   

function Search() {
 
    return (
        < InstantSearch searchClient={searchClient} indexName="movies" >
            <Header />
            <div className="body-content">
                <Sidebar />
                <Content/>
            </div>
        </InstantSearch >
    );        

};
const Header = () => (
    <header className="header">

        <SearchBox
            className="search-bar"
            translations={{ placeholder: 'Search for Movies' }}
        />
    </header>
);
const Sidebar = () => (
    <aside className="sidebar">
        <RefinementList/>
   </aside> 
);
const Hit = ({ hit }) => (
    <div className="card">
        <div className="card-image">
            <img src={hit.image} alt={hit.name} className="image"/>
        </div>
        <div className="card-contents">
           <div className="card-title"> {hit.title}</div>
            <div className="card-year"><em> </em>Year: {hit.year}</div>
            <div className="card-rating">Rating: {hit.rating}</div>
            <div className="card-genre"> <span>{hit.genre[0]}</span> <span>{hit.genre[1]}</span> </div>
        </div>
    </div>
);
const Content = () => (
    <main>
        <Hits hitComponent={Hit} />
    </main>
);
export default Search;
