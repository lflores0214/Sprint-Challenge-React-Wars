import React from "react";
import styled from "styled-components";

const Card = styled.div`
  wdith: 20%;
  background-color: #2e557c;
  margin: 2% 2% 2% 2%;
  border: 2px solid #203b56;
  padding: 2%;
  box-shadow: -1px 1px 3px 4px #203b56;
  color: #d7cfcf;
  border-radius: 5px;
`;

const Name = styled.h1`
  font-size: 1.2rem;
  text-decoration: underline;
  text-transform: uppercase;
  color: #9b8787;
  font-family: jedi-font;
`;

export default function PersonCard(props) {
  return (
    <Card>
      <Name>{props.person.name}</Name>
      <p>Height: {props.person.height}</p>
      <p>Mass: {props.person.mass}</p>
      <p>Number of vehicle owned: {props.person.vehicles.length}</p>
      <p>Number of starships owned: {props.person.starships.length}</p>
      <p>Number of films: {props.person.films.length}</p>
    </Card>
  );
}
