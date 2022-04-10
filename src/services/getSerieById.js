import {API_KEY, API_URL, HASH, SERIES} from "./settings";

export function getSerieById(id) {

    return fetch(`${API_URL}${SERIES}/${id}${API_KEY}${HASH}`)
        .then(r => r.json())

}