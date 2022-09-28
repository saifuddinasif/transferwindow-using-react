import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import './Home.css';


const Home = () => {
/* eta notice kora important kokon [ ] hobe ar kokon { } hobe  */
const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data?.player);
      });
  }, [search]);
 
    console.log(players);


    return (
      <div className="home-container">

       <div className="left-side">
        
        <input onChange={(e) => setSearch(e.target.value)} type="text"  className='search-input'/>
        <button className='search-btn'>Search</button>
            <div className="players-container">

                <Player></Player>
            </div>
    
       </div>

       <div className="right-side">
       <div className="cart">
        <p>This is player Cart </p>
       </div>
       </div>

    

      </div>
    );
};

export default Home;