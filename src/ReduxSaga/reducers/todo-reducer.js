import {GET_MOVIE_DATA_YEAR} from "../Actions/actions";
import {GET_MOVIE_DATA_GENRE} from "../Actions/actions";

const initialState = {arr:[],genre:"action",year:"1981"}
 
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'RES':
      console.log("payload",payload)
      return {
        ...state,
        arr:payload
      };
      
    case GET_MOVIE_DATA_YEAR:  
    return {
        ...state,
        year:payload
      };
    case GET_MOVIE_DATA_GENRE:
      return {
        ...state,
        genre:payload
      }
    default:
      return state;
  }
};
