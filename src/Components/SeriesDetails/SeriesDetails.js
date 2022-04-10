import React from "react";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getSerieById} from "../../services/getSerieById"
import "../Series/series.css"


export function SeriesDetails() {

   const [serie, setSerie] = useState();
   const params = useParams();

    useEffect(() => {
        getSerieById(params.id)
            .then((r) => setSerie(r.data.results[0]))
    }, [params.id])


    return (
        <div className="experience-card">
            {serie && (
                <>
            <div>
                <img src={`${serie.thumbnail.path}/standard_fantastic.jpg`} className="image" alt="Image of Experience"/>
            </div>

            <h1>{serie.title}</h1>
                </>
                )}
        </div>
    );

}