import React, {useContext, useEffect } from 'react'
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
// import { withRoomConsumer } from '../context';
import Loading from './Loading';
import RoomState from '../context/room/RoomState';
import roomContext from '../context/room/roomContext';



function RoomsContainer() {


  
  const roomContext1 = useContext(roomContext)
  const { loading, sortedRooms, rooms, getRoomsData } = roomContext1;
  
  useEffect(() => {
    if(rooms.length === 0) {
      getRoomsData();
    }
  }, [])

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



// import React from 'react'
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import { RoomConsumer } from '../context';
// import Loading from './Loading';


// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>      
//       {value => {
//         const {loading, sortedRooms, rooms } = value;

//         if(loading) {
//           return <Loading />
//         }
        
//         return (
//           <div>
//             Hello From Rooms Container
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         );
//         }
//       }
//     </RoomConsumer>
//   )
// }
