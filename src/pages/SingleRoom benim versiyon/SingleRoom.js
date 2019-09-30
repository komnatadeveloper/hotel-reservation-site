import React, { useContext, useEffect, useState } from 'react'
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link } from 'react-router-dom';
// import { RoomContext } from '../context';
import roomContext from '../context/room/roomContext';

import StyledHero from '../components/StyledHero';


const  SingleRoom = ({ match }) => {

  

  const roomContext1 = useContext(roomContext);
  const {rooms, getSingleRoom} = roomContext1;
  console.log(rooms)
  const [room, setRoom] = useState({});

  // let room;

  

  useEffect(() => {
    // room = getSingleRoom(match.params.slug)
    
    console.log(match)
    console.log(getSingleRoom(match.params.slug, rooms))
    let room1 = getSingleRoom(match.params.slug, rooms)
    setRoom(room1)
  }, [getSingleRoom, rooms, room])

  // const getSingleRoom = (slug, rooms) => {
  //   console.log(slug)
  //   let tempRooms = [...rooms];
  //   console.log(tempRooms)
  //   const room = tempRooms.find((room) => room.slug === slug);

  //   console.log(room)
  //   return room;
  // };
  
  // constructor(props) {
  //   super(props) 
    
  //   this.state = {
  //     slug: this.props.match.params.slug,
  //     defaultBcg
  //   }
  // };

  // static contextType = RoomContext;



  // componentDidMount() {

  // }

  
  if (!room) {
    console.log(room)
    return  <div className="error">
      <h3>no such room could be found...</h3>
      <Link to='/rooms' className="btn-primary">
        back to rooms
      </Link>
    </div>
  } 

  // const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;

  // /* mainImg will be the 1st image, and defaultImg will become the rest of images */
  // const [ mainImg, ...defaultImg] = images;

  console.log(room)

  
  return (

    
    <> 
     {/* <p>Rooom {room && room.slug ? room.slug : 'HATA'}</p>
      <p>Rooom {room && room.slug }</p>
      <p>Rooom {!room && 'SİKEYİM' }</p> */}
      asdasdasds
      {/* <StyledHero img={images[0] || this.state.defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to='/rooms' className="btn-primary">
            back to roms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">

        {defaultImg.map( (item, index) => (

          <img key={index} src={item} alt={name} />
        )  )  }
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>size : ${size} SQFT</h6>
            <h6>
              max Capacity : {
                capacity > 1 
                  ? 
                  `${capacity} people` 
                  : 
                  `${capacity} person`
              }
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map(( item, index ) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </section> */}
    </>

  )
  
}

export default SingleRoom;
