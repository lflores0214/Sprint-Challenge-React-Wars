import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonCard from "./PersonCard";
import styled from "styled-components";
import Button from "./Button"

const Container = styled.div`
  width: 90%;
  background-color: rgba(126, 120, 99, 0.2);
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 0 2% 0 5%;
  -webkit-box-shadow: -1px 1px 5px 9px #585445;
  -moz-box-shadow: -1px 1px 5px 9px #585445;
  box-shadow: -1px 1px 5px 9px #585445;
  border-radius: 10px
`;
const PagContainer = styled.div`
  width: 90%;
  background-color: rgba(126, 120, 99, 0.9);
  color: #270b0b;
  display: flex;
  justify-content: center;
  margin: 3% 0 1.5% 5%;
  text-decoration: none;
  list-style-type: none;
  align-item: center;
  border-radius: 10px;
`;

export default function PersonList() {
  const [personData, setPersonData] = useState([]);
  const [page, setPage] = useState(1)

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${page}`)
      .then(response => {
        console.log(response.data);
        setPersonData(response.data.results);
      })
      .catch(error => {
        console.log("MAYDAY MAYDAY", error);
      });
  }, [page]);

  return (
    <>
      <Container>
        {personData.map(person => {
          return (
            <PersonCard
              person={person}
              keyValue={person.url}
              name={person.name}
              birthYear={person.birth_year}
              height={person.height}
              hairColor={person.hair_color}
              eyeColor={person.eye_color}
              homeWorld={person.homeworld}
              mass={person.mass}
            />
          );
        })}
        
      </Container>
      <PagContainer>
       <Button setPage={setPage}
       page={page}/>
      
      </PagContainer>
    </>
  );
}
