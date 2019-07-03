import React, { useState, useEffect } from "react";
import axios from 'axios';
import ListItem from './ListItem'


const Ships = () => {
  
  const [ships, setShips] = useState([]);
  const [shipIndex, setShipIndex] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  
  async function fetchData() {
    axios.get("https://swapi.co/api/starships/")
      .then(
        load => {
          let shipsResp = [];
          shipsResp = load.data.results; 
          setShips(shipsResp)
          console.log("from promise:", shipsResp, ships);
          
        })
     
  }
  const detailsToggle = () => {
    setShowDetails(!showDetails)
    console.log("from details toggle", showDetails);
    
  }

  const shipDetails = (e) => {
    console.log("props from click", e);
    
    setShipIndex(e);
    detailsToggle();
  }
  let shipList =  <div>
  <h4>The list of Star Wars universe starships:</h4>
  <table >
  <tbody>
  <tr>
    <th>Ship name</th>
    <th>Lenght</th> 
    <th>Min. Req. Crew.</th>
  </tr>
  {ships.map((ship, index) => <ListItem details={ship} id={index} key={index} action={() => shipDetails(index)}/>)}
  </tbody>
  </table>
 
</div>

if (showDetails) {
  
  const targetShip = ships[shipIndex];
  shipList = (
    <div className="itemdetails">
    <p>Name: {targetShip.name}</p>
    <p>Model ID: {targetShip.model}</p>
    <p>Hyperdrive rating: {targetShip.hyperdrive_rating}</p>
    <p>Minimum required crew&#42;: {targetShip.crew}</p>
    <p>Length: {targetShip.length}m</p>
    <p>Cost to build: {targetShip.cost_in_credits}</p>
    <p>Manufactured by: {targetShip.manufacturer}</p>
    <p>Consumables on board for: {targetShip.consumables}</p>
    <p>Available passengers space: {targetShip.passengers}</p>

    
    
    <br />
    <br />
    <button onClick={detailsToggle}>Go back</button>
    <br />
    <br />
    <br />
    <br />
     &#42;Does not apply to Han Solo
       
  </div>
  );
}

  useEffect(() => {
    fetchData();
  }, []);
  console.log(ships);
  
  return (
   <div>
    {shipList}
   </div>
  );
};
export default Ships;
