import AddMovie from "./AddMovie"
import MovieList from "./MovieList"

const MoviePage = () => {
    return(
        <div className="container col-12 col-md-6 my-3 border" >
            <AddMovie/>
            <MovieList/>
        </div>
    )
}
export default MoviePage