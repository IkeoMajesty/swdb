import React from 'react'


const ListItem = (props) => {
    

    return (
    <tr>
      <td>{props.details.name}</td>
      <td>{props.details.length}m</td> 
      <td>{props.details.crew}</td>
      <td><button onClick={props.action}>Details</button></td>
    </tr>
    )
}

export default ListItem

