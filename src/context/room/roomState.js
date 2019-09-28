import React, { useReducer } from 'react';
import roomContext from './roomContext';
import roomReducer from './roomReducer';

import Client from '../../Contentful';

const roomState = props => {
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
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "rooms",
        // order: "sys.createdAt",
        // order: "fields.price"
        order: "-fields.price"
      });

      let rooms = formatData(response.items);
      let featuredRooms = rooms.filter(room => room.featured === true);
      let maxPrice = Math.max(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size));
      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize
      });
    } catch (err) {
      console.log(err);
    }
  }

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

  



  return (   
  <roomContext.Provider  
    value = {{

    }}
  >

  </roomContext.Provider>
  )
}
