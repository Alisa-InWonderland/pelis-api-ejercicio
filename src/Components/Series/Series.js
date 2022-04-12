import React from "react";

import "./series.css"
import {SeriesItem} from "../SeriesItem/SeriesItem";



export function Series({series}) {


    return (

            <section className='experienceCatalog'>

                <h1 className="catalog-title">Series Marvel</h1>

                <div className="container-card">
                    {series.map((serie) => {
                        return <SeriesItem serie={serie}/>;
                    })}
                </div>

            </section>
    );
}

