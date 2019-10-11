import React from "react";
import styled from "styled-components"

const BtnStyle = styled.button`
    width: 120px;
    height:50px;
    padding:2%;
    border-radius: 10px;
    margin: 1% 2% 1% 2%;
    background-color: #2e557c;
    border: 2px solid #381010;
    font-size:1.6rem;
    color: #d7cfcf;
`;

export default function Button(props) {
  return (
    <div>
      <BtnStyle onClick={()=>{
          props.setPage(props.page - 1)
      }}>Previous</BtnStyle>
      <BtnStyle onClick={()=>{
          props.setPage(props.page + 1)
      }}>Next</BtnStyle>
    </div>
  );
}
