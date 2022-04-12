import {API_KEY, API_URL, COMICS, HASH} from "./settings";

export function getComicById(id) {

    return fetch(`${API_URL}${COMICS}/${id}${API_KEY}${HASH}`)
        .then(r => r.json())

}