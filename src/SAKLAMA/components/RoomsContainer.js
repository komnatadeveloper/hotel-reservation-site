import React, {useContext } from 'react'
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
// import { withRoomConsumer } from '../context';
import Loading from './Loading';
import RoomState from '../context/room/RoomState';



function RoomsContainer({context}) {
  const roomState = useContext(RoomState)
  const { loading, sortedRooms } = roomState;
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
