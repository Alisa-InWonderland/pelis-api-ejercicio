import React from "react";
import {Link} from "react-router-dom";
import "../Series/series.css"




export function SeriesItem({serie}) {


    return (
        <div className="experience-card">
            <div>
                <Link to={`/serie/${serie.id}`} title={serie.title}>
                        <img src={`${serie.thumbnail.path}/standard_fantastic.jpg`} className="image" alt="Image of Serie"/>
                </Link>
            </div>

            <table className="experience-table">
                <tbody>
                    <tr>
                        <td>{serie.title}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}

