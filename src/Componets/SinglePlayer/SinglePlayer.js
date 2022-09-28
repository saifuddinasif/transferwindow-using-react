import React from 'react';
import './SinglePlayer.css'

const SinglePlayer = ({player}) => {
console.log(player)

const { strPlayer, idPlayer, strCutout } = player;

    return (
     
        <div className="card">
            <img  className='img' src={strCutout}alt="" />

            <p> Player name:{ strPlayer}</p>
            <p>{}</p>


        </div>
    );
};

export default SinglePlayer;