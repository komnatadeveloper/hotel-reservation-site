import React from 'react';
import { useContext } from 'react';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';
import roomContext from '../context/room/roomContext';



const FeaturedRooms = () => {

  const RoomContext = useContext(roomContext); 
  const { loading,  featuredRooms } = RoomContext;
  
  const featuredRooms1 = featuredRooms.map( featuredRoom => (
    <Room key={featuredRoom.id} room={featuredRoom} />
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
