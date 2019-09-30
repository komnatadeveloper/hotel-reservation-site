import React, {useContext } from 'react'
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Loading from './Loading';
import roomContext from '../context/room/roomContext';



function RoomsContainer() {
  
  const roomContext1 = useContext(roomContext)
  const { loading, sortedRooms } = roomContext1;
  


  if (loading) {
      return <Loading />
    }

  return (
    <>
      <RoomsFilter/>
      <RoomsList rooms={sortedRooms} />
    </>
  )
}

export default RoomsContainer;


