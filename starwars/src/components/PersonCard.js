import React from 'react'
import styled from 'styled-components'




const Card = styled.div`
wdith: 40%;
background-color: #2e557c;
margin: 2% 2% 2% 2%;
border: 2px solid #381010;
padding: 2%;
box-shadow: -1px 1px 3px 4px #203b56;
color:#d7cfcf;

`;


export default function PersonCard(props) {

    return(
        <Card>
            <p>Name: {props.person.name}</p>
            <p>Height: {props.person.height}</p>
            <p>Number of vehicle owned: {props.person.vehicles.length}</p>
            <p>Number of starships owned: {props.person.starships.length}</p>
            <p>Number of films: {props.person.films.length}</p>
        </Card>
    )
}
    