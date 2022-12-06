import movieData from "../../utils.json";
import { useNavigate as navigate } from "react-router-dom";

export const getMovieData = async (ab) => {
    // console.log(ab)
    let arrayOfImg = [];
    movieData.components.map(
      (list) =>
        list.type == "movie-list" &&
        list.items.map((x) => {
            (x.releaseDate == ab) &&
            // (x.genres == genre) &&
            //   x.title.toLowerCase().includes(title.toLowerCase()) &&
            arrayOfImg.push(
              <img
                className="image1"
                onClick={() => navigate("/Details", { state: x })}
                src={x.imageUrl}
                alt=""
                width="100%"
                height="100%"
              />
            )
        })
    );
    return arrayOfImg;
};
