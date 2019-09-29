import React, { useReducer } from 'react';
import roomContext from './roomContext';
import roomReducer from './roomReducer';

import Client from '../../Contentful';
import { GET_ROOMS, FILTER_ROOMS, CHANGE_THAT_STATE } from '../types';




const RoomState = (props) => {
  const initialState = {    
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
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
    try {
      let response = await Client.getEntries({
        content_type: "rooms",
        // order: "sys.createdAt",
        // order: "fields.price"
        order: "fields.price"
      });

      console.log(response)

      let rooms = formatData(response.items);
      let featuredRooms = rooms.filter(room => room.featured === true);
      let maxPrice = Math.max(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size));

      

      dispatch( { 
        type: GET_ROOMS,
        payload: rooms
          // rooms,
          // featuredRooms,
          // sortedRooms: rooms,
          // loading: false,
          // price: maxPrice,
          // maxPrice,
          // maxSize
        
      })
    } catch (err) {
      console.log(err);
    }
  }  // END OF get Room Data


  

  const formatData = (items) => {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let room = { ...item.fields, images: images, id };
      return room;
    });

    return tempItems;
  }

  const getRoom = (slug) => {
    let tempRooms = [...initialState.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  const filterRoomsInState = (sortedRooms) => {
    dispatch({
      type: FILTER_ROOMS,
      payload: sortedRooms
    })
  }

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
        featuredRooms: state.featuredRooms,
        sortedRooms: state.sortedRooms,
        loading: state.loading,
        price: state.price,
        maxPrice: state.maxPrice,
        maxSize: state.maxSize,
        getRoomsData,
        filterRoomsInState,
        changeThatState
    }}
  >
    { props.children }
  </roomContext.Provider>)
  
};

export default RoomState;
