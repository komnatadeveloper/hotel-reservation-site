import { GET_ROOMS, CHANGE_THAT_STATE, FILTER_ROOMS, SET_LOADING } from "../types";


// import {
//   GET_CONTACTS,
//   ADD_CONTACT,
//   DELETE_CONTACT,
//   SET_CURRENT,
//   CLEAR_CURRENT,
//   UPDATE_CONTACT,
//   FILTER_CONTACTS,
//   CLEAR_FILTER,
//   CONTACT_ERROR,
//   CLEAR_CONTACTS
// } from '../types';



export default (state, action) => {
  switch (action.type) {
    // case GET_CONTACTS:
    //   return {
    //     ...state,
    //     contacts: action.payload,
    //     loading: false
    //   } 
    
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
        
        console.log(`action.payload ${action.payload.length}`)
        
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