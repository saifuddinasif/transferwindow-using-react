import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import './Home.css';
import {  toast } from 'react-toastify';
import Swal from "sweetalert2";


const Home = () => {
/* eta notice kora important kokon [ ] hobe ar kokon { } hobe  */
const [players, setPlayers] = useState([]);
const [cart, setCart] = useState([]);
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
 

  const handleDelete = (id) => {
    const leftPlayer = cart.filter((pd) => pd.idPlayer !== id);
    setCart(leftPlayer);
    toast("wow deleted form cart!");
    Swal.fire("Good job!", "You clicked the button!", "success");




    }


    return (
      <div className="home-container">

       <div className="left-side">
        
        <input onChange={(e) => setSearch(e.target.value)} type="text"  className='search-input'/>
        <button className='search-btn'>Search</button>
            <div className="players-container">

                <Player players={players} cart={cart} setCart ={setCart}></Player>
            </div>
    
       </div>

       <div className="right-side">
       <div className="cart">
        <p>This is player Cart </p>

        {
        cart.map((p) =>(
       <div className='cart-info-container'>

                
           <li>{p.strPlayer} </li>
          <button onClick={() => handleDelete(p.idPlayer)} className='delete-btn'></button>
       </div>
        ))
        }
        
       </div>
       </div>

    

      </div>
    );
};

export default Home;