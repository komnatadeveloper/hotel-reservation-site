import React, {useContext, useEffect} from 'react'
import Room from './Room';
import roomContext from '../context/room/roomContext';



export default function RoomsList() {
  const roomContext1 = useContext(roomContext);
  const {sortedRooms} = roomContext1;

  useEffect(() => {
    
  }, [sortedRooms]);



  if (sortedRooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately no rooms matched your searched parameters</h3>
      </div>
    )
  }

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {
          sortedRooms.map( item => (
            <Room key={item.id} room={item} />
          ))
        }
      </div>
    </section>
  )
}
