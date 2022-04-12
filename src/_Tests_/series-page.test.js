import React from "react"
import { render, screen } from "@testing-library/react"
import {Series} from "../Components/Series/Series";
import {SeriesItem} from "../Components/SeriesItem/SeriesItem";

test("renders SeriesItem with props", () => {
    const fakeSerie = {
        id: '22',
        title: "Fantastic Four by Dan Slott Vol. 1 (2021)",
        thumbnail: {
            path: "www.qqq.jpg"
        }
        }
    render(<SeriesItem fakeSerie={fakeSerie}/>);

    const serieTitle = screen.getByText('Fantastic Four by Dan Slott Vol. 1 (2021)');
    const serieImageURL = screen.getByText('www.qqq.jpg');
    const imgLink = screen.getByTitle('Fantastic Four by Dan Slott Vol. 1 (2021)');



    expect(serieTitle).toBeInTheDocument();
    expect(serieImageURL).toBeInTheDocument();
    expect(imgLink).toHaveAttribute("href", "/serie/22");

});