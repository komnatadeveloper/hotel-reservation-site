import { GET_ROOMS, CHANGE_THAT_STATE, FILTER_ROOMS, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {

    
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    
    case GET_ROOMS:
      return {
        ...state,        
        rooms: action.payload.rooms,
        featuredRooms: action.payload.featuredRooms,
        sortedRooms: action.payload.rooms,
        price: action.payload.price,
        maxPrice: action.payload.maxPrice,
        maxSize: action.payload.maxSize
      };

    case FILTER_ROOMS:
      { 
        return {
          ...state,
          sortedRooms: [...action.payload]
        }
      }

    case CHANGE_THAT_STATE:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      }   


    default:
      return state;
  }
}