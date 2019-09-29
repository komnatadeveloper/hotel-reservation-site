import React, {useContext} from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import RoomState from '../context/room/RoomState';
import roomContext from '../context/room/roomContext';


export default function Home() {
  // denemek amaçlı
  const RoomState1 = useContext(roomContext);
  const {rooms} = RoomState1;
  console.log(rooms)
  // denemek amaçlı

  return (
    <React.Fragment>
      <Hero>
        <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
          <Link to='/rooms' className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </React.Fragment>
  )
}
