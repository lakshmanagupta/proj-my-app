import { useLocation } from "react-router-dom";

const Details = (props) =>{
const location = useLocation();
const movieData = location.state;
return  (
    <div >
        <h2> Title :</h2> {movieData.title}<br/>
        <h2> Synopsis:</h2> {movieData.synopsis}<br/>
        <h2> Genres: </h2>{movieData.genres}<br/>
        <h2> ReleaseDate :</h2> {movieData.releaseDate}
    </div>
)
}

export default Details;