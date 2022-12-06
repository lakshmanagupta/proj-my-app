import "./App.scss";
import movieData from "./utils.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Grid from "@material-ui/core/Grid";
import { GET_MOVIE_DATA_GENRE, GET_MOVIE_DATA_YEAR } from "./ReduxSaga/Actions/actions";
import { useDispatch, useSelector } from "react-redux";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "./Reducers/moviereducer"
// import FormControl from "@mui/material/FormControl";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let [title, SetTitle] = useState("");
  const handleGoClick = () => {
    SetTitle(document.getElementById("searchInp").value);
  };
  // const [year, setYear] = useState("1981");
  // const [genre, setGenre] = useState("action");
  const year  = useSelector((state) => state.todo.year)
  const genre = useSelector((state) => state.todo.genre)
  // useSelector((state) => console.log("data from state",state.todo))

  const handleChange = (event) => {
    // setYear(event.target.value)
    dispatch({ type: GET_MOVIE_DATA_YEAR, payload: event.target.value })
  };
  const handleChangeGenre = (event) => {
    // setGenre(event.target.value)
    dispatch({ type: GET_MOVIE_DATA_GENRE, payload: event.target.value })
  };
  return (
    <div className="App">
      <header className="App-header productsContainer">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="Age"
          onChange={handleChange}
          style={{display:"inline-flex"}}
        >
          {movieData.components.map(
            (l) =>
              l.type == "filters" &&
              l.items[0].label == "Release Date" &&
              l.items[0].valueToFilter.map((x) => {
                return <MenuItem value={x}>{x}</MenuItem>;
              })
          )}
        </Select>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={genre}
          onChange={handleChangeGenre}
        >
          {movieData.components.map(
            (l) =>
              l.type == "filters" &&
              l.items[1].label == "Genres" &&
              l.items[1].valueToFilter.map((x) => {
                return <MenuItem value={x}>{x}</MenuItem>;
              })
          )}
        </Select>
        
        <span>
          <input id="searchInp" placeholder="Search for movies"></input>
        </span>
        <span>
          <button onClick={handleGoClick}>GO</button>
        </span>
        <Grid sm={2} md={2}>
        {movieData.components.map(
          (list) =>
            list.type == "movie-list" &&
            list.items.map((x) => {
              return (
                (x.releaseDate == year) &&
              (x.genres == genre) &&
                x.title.toLowerCase().includes(title.toLowerCase()) && (
                  <img
                    className="image1"
                    onClick={() => navigate("/Details", { state: x })}
                    src={x.imageUrl}
                    alt=""
                    width="100%"
                    height="100%"
                  />
                )
              );
            })
        )}
        </Grid>
      </header>
    </div>
  );
}

export default App;
