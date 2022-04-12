import React from "react";
import {Link} from "react-router-dom";
import "../Series/series.css"



export function ComicsItem({comic}) {



    return (
        <div className="experience-card">
            <div>
               <Link to={`/comic/${comic.id}`}>
                   <img src={`${comic.thumbnail.path}/standard_fantastic.jpg`} className="image" alt="Image of Experience"/>
               </Link>
            </div>

            <table className="experience-table">
                <tbody>
                    <tr>
                        <td>{comic.title}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}

