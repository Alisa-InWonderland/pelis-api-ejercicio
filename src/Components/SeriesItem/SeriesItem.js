import React from "react";
import {Link} from "react-router-dom";
import "../Series/series.css"




export function SeriesItem({serie}) {

    const { id, title } = serie;
    const path = serie.thumbnail['path'];


    return (
        <div className="experience-card">
            <div>
                <Link to={`/series/${id}`}>
                        <img src={`${path}/standard_fantastic.jpg`} className="image" alt="Image of Experience"/>
                </Link>
            </div>

            <table className="experience-table">
                <tbody>
                    <tr>
                        <td>{title}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}

