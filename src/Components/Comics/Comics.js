import React from "react";

import "../Series/series.css"
import {ComicsItem} from "../ComicsItem/ComicsItem";



export function Comics({comics}) {


    return (

            <section className='experienceCatalog'>

                <h1 className="catalog-title">Comics Marvel</h1>

                <div className="container-card">
                    {comics.map((comic) => {
                        return <ComicsItem key={comic.id} comic={comic}/>;
                    })}
                </div>

            </section>
    );
}

