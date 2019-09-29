import { GET_ROOMS, CHANGE_THAT_STATE, FILTER_ROOMS } from "../types";


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
    
    case GET_ROOMS:
      return {
        ...state,
        // ...action.payload
        rooms: action.payload.rooms
        // featuredRooms: action.payload.featuredRooms,
        // sortedRooms: action.payload.rooms,
        // loading: action.payload.loading,
        // price: action.payload.price,
        // maxPrice: action.payload.maxPrice,
        // maxSize: action.payload.maxSize
      };
    case FILTER_ROOMS:
      return {
        ...state,
        featuredRooms: action.payload
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