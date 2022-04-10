import {COMICS_ENDPOINT} from "./settings";

export function getComics() {

    return fetch(COMICS_ENDPOINT)
        .then(r => r.json())

};

