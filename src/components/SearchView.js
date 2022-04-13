
import Hero from "./Hero";
import { Link } from "react-router-dom";

//TMDB API KEY=02b8338f8bf30c8faf7bf3a431f2c3a2


//example for movie searches: https://api.themoviedb.org/3/search/company?api_key=02b8338f8bf30c8faf7bf3a431f2c3a2&query=starwars&page=1
const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
  const detailUrl = `/movies/${movie.id}`
  return (
    <div className="col-lg-2 col-md-3 col-2 my-4">

      <div className="card" style={{ width: '18 rem' }}>
        <img className="card-img-top" src={posterUrl} alt="Card image cap" onError={(e) => { e.target.onerror = null; e.target.src = "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg" }} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to={detailUrl} className="btn btn-primary">Show Detail</Link>
        </div>
      </div>
    </div>

  )
}

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`

  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />
    //  <div key={i}>{obj.original_title}</div>
  })


  function renderSearchResults() {

    if (searchResults.length == 0) {
      const msg = `Apologies, Currently there is no results is found for ${keyword}`;
      return (
        <>
          <Hero text={title} />

          <div className="container">
            <div className="row bg-primary">
              <Hero text={msg} />
            </div>
          </div>
        </>
      )
    }

    if (searchResults) {
      return (
        <>
          <Hero text={title} />

          <div className="container">
            <div className="row">
              {resultsHtml}
            </div>
          </div>
        </>
      )
    }

  }

  return renderSearchResults();
}

export default SearchView;