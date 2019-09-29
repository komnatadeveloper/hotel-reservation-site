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
  const {getSingleRoom} = roomContext1;
  const [slug, setSlug] = useState(match.params.slug);

  let room;

  useEffect(() => {
    room = getSingleRoom(slug);
  }, [slug])
  
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
    return  <div className="error">
      <h3>no such room could be found...</h3>
      <Link to='/rooms' className="btn-primary">
        back to rooms
      </Link>
    </div>
  }

  const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;

  /* mainImg will be the 1st image, and defaultImg will become the rest of images */
  const [ mainImg, ...defaultImg] = images;

  return (
    <>
      <StyledHero img={images[0] || this.state.defaultBcg}>
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
      </section>
    </>
  )
  
}

export default SingleRoom;
