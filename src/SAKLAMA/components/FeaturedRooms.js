import React, { Component } from 'react';
// import { RoomContext } from '../context';
import { useContext, useEffect } from 'react';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';
import roomContext from '../context/room/roomContext';



const FeaturedRooms = () => {

  const RoomContext = useContext(roomContext); 
   console.log(RoomContext) 
  const { loading, getRoomsData, featuredRooms, rooms } = RoomContext;
  
  
  useEffect(  () => {
    
     getRoomsData();
     console.log(rooms)
     console.log(featuredRooms)
    
  }, [loading] )
   
  
  const featuredRooms1 = featuredRooms.map( featuredRoom => (
    <Room key={featuredRooms.id} featuredRoom={featuredRoom} />
  ))

  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading
            ? 
            <Loading />
          : featuredRooms1 }
      </div>
    </section>
  ) 
  
}

export default FeaturedRooms;
