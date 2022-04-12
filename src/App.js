import './App.css';
import  { Header } from './Components/Header/Header'
import  { Footer } from './Components/Footer/Footer'
import {Series} from "./Components/Series/Series";
import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {getSeries} from "./services/getSeries";
import {getComics} from "./services/getComics";
import {Comics} from "./Components/Comics/Comics";
import {SeriesDetails} from "./Components/SeriesDetails/SeriesDetails";
import {ComicDetails} from "./Components/ComicDetails/ComicDetails";



function App() {

  const [series, setSeries] = useState([]);
  const [comics, setComics] = useState([]);
  const [requiresUpdate, setRequiresUpdate] = useState(true);


    useEffect(() => {
        if (requiresUpdate) {
            getSeries()
                .then((r) => setSeries(r.data.results))
                .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])

    useEffect(() => {
        if (requiresUpdate) {
            getComics()
                .then((r) => setComics(r.data.results))
                .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])



  return (
      <div className="App">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Series series={series}/>}/>
            <Route path="/series" element={<Series series={series}/>}/>
            <Route path="/comics" element={<Comics comics={comics}/>}/>
            <Route path="/serie/:id" element={<SeriesDetails />}/>
            <Route path="/comic/:id" element={<ComicDetails />}/>
          </Routes>
        </main>
        <Footer/>
      </div>
  );
}

export default App;
