import React from 'react'
import { useContext, useEffect} from 'react';
// import {RoomContext} from '../context';
import Title from './Title';

import roomContext from '../context/room/roomContext';


// get all unique value  -- good-for-utilities
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}


export default function RoomsFilter() {
  const RoomContext = useContext(roomContext);
  const {
    rooms,
    sortedRooms,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
    filterRoomsInState,
    changeThatState
  } = RoomContext;

  useEffect(() => {
    filterRooms();
  }, [type, capacity, price, breakfast, pets, minSize ])

  // get unique types
  let types = getUnique(rooms, 'type');
  // add all
  types= ['all', ...types];
  // map to JSX
  types = types.map((item, index) => (
    <option value={item} key={index}>{item}</option>
  ))


  let people = getUnique(rooms, 'capacity');
  people = people.map( (item, index) => (
    <option key={index} value={item}>{item}</option>
  ))


  const filterRooms = () => {
    console.log(`type: ${type}`)
    // let {
    //   rooms, type, capacity, price, minSize, maxSize, breakfast, pets
    // } = this.state;

    // all the rooms
    let tempRooms = [...rooms];
    console.log(tempRooms)
    
    // transform value to number
    let capacity1 = parseInt(capacity);
    let price1 = parseInt(price);
    console.log(tempRooms)
    
    
    // filter by type
    if (type !== 'all') {
      tempRooms = tempRooms.filter(room => room.type === type)
      console.log(type, typeof(type))
      console.log(tempRooms)
    }
    
    // filter by capacity
    if (capacity1 !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity1)
      console.log(tempRooms)
    }
    
    // // filter by price
    tempRooms = tempRooms.filter(room => room.price <= price1);
    console.log(tempRooms)
    
    // filter by size
    tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);
    console.log(tempRooms)
    
    // filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true)
    }
    console.log(tempRooms)
    
    // filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true)
      console.log(tempRooms)
    }

    filterRoomsInState(tempRooms);
  } // filterRooms END


  const handleChange =  e => {
    // const target = e.target
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name

    changeThatState(name, value); // whatever the name is(price, breakfast, or whatever)

    
  }

  

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form  className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type" >room type</label>
          <select 
            name="type" 
            id="type" 
            value={type} 
            className="form-control" 
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* guests  */}
        <div className="form-group">
          <label htmlFor="capacity" >Guests</label>
          <select 
            name="capacity" 
            id="capacity" 
            value={capacity} 
            className="form-control" 
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end of guest  */}

        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input 
            type="range" 
            name="price" 
            min={minPrice} 
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* room price end */}

        {/* size */}
        <div className="form-group">
          <label htmlFor="size">Room Size</label>
          <div className="size-inputs">
            <input 
              type="number" 
              name="minSize" 
              id="size" 
              value={minSize} 
              onChange={handleChange} 
              className="size-input"
            />
            <input 
              type="number" 
              name="maxSize" 
              id="size" 
              value={maxSize} 
              onChange={handleChange} 
              className="size-input"
            />
          </div>
        </div>
        {/* end of size */}
        
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input 
              type="checkbox" 
              name="breakfast" 
              id="breakfast" 
              checked={breakfast} 
              onChange={handleChange}
            />
            <label htmlFor="breakfast" >breakfast</label>
          </div>
          <div className="single-extra">
            <input 
              type="checkbox" 
              name="pets" 
              id="pets" 
              checked={pets} 
              onChange={handleChange}
            />
            <label htmlFor="pets" >pets</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  )
}
