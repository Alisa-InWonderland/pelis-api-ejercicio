import {SERIES_ENDPOINT} from "./settings";

export function getSeries() {

    return fetch(SERIES_ENDPOINT)
        .then(r => r.json())

};

