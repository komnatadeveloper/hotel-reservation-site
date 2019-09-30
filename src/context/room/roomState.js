import React, { useReducer } from 'react';
import roomContext from './roomContext';
import roomReducer from './roomReducer';

import Client from '../../Contentful';
import { 
  GET_ROOMS, 
  FILTER_ROOMS, 
  CHANGE_THAT_STATE,
  SET_LOADING,   
} from '../types';




const RoomState = (props) => {
  const initialState = {    
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: false,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false   
  }

  const [state, dispatch] = useReducer(roomReducer, initialState);


  // get Room Data
  const getRoomsData = async () => {

    setLoading(true);
    
    try {
      let response = await Client.getEntries({
        content_type: "rooms",
        // order: "sys.createdAt",
        // order: "fields.price"
        order: "fields.price"
      });

      let rooms = formatData(response.items);
      let featuredRooms = rooms.filter(room => room.featured === true);
      let maxPrice = Math.max(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size)); 

      dispatch( { 
        type: GET_ROOMS,
        payload: {
          rooms,
          featuredRooms,
          sortedRooms: rooms,
          price: maxPrice,
          maxPrice,
          maxSize
        }
          
      })
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.log(err);
    }
  }  // END OF get Room Data

  const setLoading = (isLoading) => dispatch( { type: SET_LOADING, payload:isLoading })

  const filterRoomsInState = (tempRooms) => {
    dispatch({ type: FILTER_ROOMS, payload: tempRooms })
  } 
  const formatData = (items) => {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let room = { ...item.fields, images: images, id };
      return room;
    });
    return tempItems;
  };

  const getSingleRoom = (slug, rooms) => {
    let tempRooms = [...rooms];
    const room = tempRooms.find((room) => room.slug === slug);

    return room;
  };

  const changeThatState = ( key, value ) => {
    dispatch ( { 
      type: CHANGE_THAT_STATE,
      payload: ( {
        key,
        value
      })
    })
  }

  return (<roomContext.Provider  
    value = {{
        rooms: state.rooms,
        loading: state.loading,
        capacity: state.capacity,
        type: state.type,
        pets: state.pets,
        breakfast: state.breakfast,
        featuredRooms: state.featuredRooms,
        sortedRooms: state.sortedRooms,
        price: state.price,
        maxPrice: state.maxPrice,
        maxSize: state.maxSize,
        minSize: state.minSize,
        getRoomsData,
        setLoading,
        getSingleRoom,
        filterRoomsInState,
        changeThatState
    }}
  >
    { props.children }
  </roomContext.Provider>)
  
};

export default RoomState;
