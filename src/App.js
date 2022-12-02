
import "./App.css";
import movieData from "./utils.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  let [title, SetTitle] = useState("")
  const handleGoClick = () => {
    SetTitle(document.getElementById("searchInp").value)
  }
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header productsContainer">
        <span><input id="searchInp" placeholder="Search for movies"></input></span>
        <span><button onClick={handleGoClick}>GO</button></span>
        <div className="image" >
          {movieData.components.map(
          (list) =>
            list.type == "movie-list" &&
            list.items.map((x) => {
              return (
                x.releaseDate &&
                x.genres && x.title.toLowerCase().includes(title.toLowerCase()) &&  
                  <img className="image1" onClick={()=>navigate("/Details", {state:x})} src={x.imageUrl} width="50%" height="50%" alt="" />
                );
            })
            )}
            </div>
        </header>
    </div>
  );
}

export default App;
