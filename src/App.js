import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Banner from './Banner';
import Row from './Row';
import requests from './request';

function App() {
  return (
    <>
    <div className="app">
    <Nav/>
    <Banner />
    <Row 
    title="NETFLIX ORIGINALS" 
    fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow={true}
    />
    <Row title="Trending" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentariesMovies}/>
    <div class="site-footer-wrapper centered dark">
    <div class="footer-divider"></div>
    <div class="site-footer">
      <p class="footer-top">© Ekansh Anand Srivastava</p>
      </div>
    </div>
    </div>
    </>
  );
}

export default App;
