import React from "react";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "../Series/series.css"
import {getComicById} from "../../services/getComicById";


export function ComicDetails() {

   const [comic, setComic] = useState();
   const params = useParams();

    useEffect(() => {
        getComicById(params.id)
            .then((r) => setComic(r.data.results[0]))
    }, [params.id])


    return (
        <div className="experience-card">
            {comic && (
                <>
            <div>
                <img src={`${comic.thumbnail.path}/standard_fantastic.jpg`} className="image" alt="Image of Experience"/>
            </div>

            <h1>{comic.title}</h1>
                </>
                )}
        </div>
    );

}