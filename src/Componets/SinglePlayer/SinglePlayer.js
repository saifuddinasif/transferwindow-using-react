import React from 'react';
import './SinglePlayer.css'

const SinglePlayer = ({ player, cart, setCart }) => {
    const { strPlayer, idPlayer, strCutout } = player;
  
    
  const handleBookmark = () => {

    const info = {
        strPlayer,
        idPlayer,
        strCutout,
      bookmark:"true",

      };

      const  previousBookMark = localStorage.getItem('bookmark');

      const oldBookMark = JSON.parse(previousBookMark);

      if(oldBookMark){
       
        const isExit = oldBookMark.find((p) => p.idPlayer === idPlayer)
        if(isExit){
          alert('already exist ')
        }

        localStorage.setItem('bookmark', JSON.stringify([...oldBookMark,info]))

      }else{
          localStorage.setItem('bookmark', JSON.stringify([info]))

      }


  }


    const handleAddToCart = () => {
      const info = {
        strPlayer,
        idPlayer,
        strCutout,
        price: 110,
      };
  
      if (cart?.length) {
        setCart([...cart, info]);
        return;
      } else {
        setCart([info]);
        return;
      }
    };

    return (
     
        <div className="card"  data-aos="zoom-in">
            <img  className='img' src={strCutout}alt="" />

            <p> Player name:{ strPlayer}</p>
            
            <p> Player Id :{idPlayer}</p>

         <button className='btn'>Details</button>
         <button onClick={handleAddToCart} className='btn'>Add To Cart </button>
         <button onClick={handleBookmark } className='btn'>Bookmarks </button>


        </div>
    );
};

export default SinglePlayer;