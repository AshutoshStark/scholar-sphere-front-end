import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { Children, useEffect, useState } from 'react';
import styled from 'styled-components'
import React from 'react'
import TypeIt from 'typeit-react';

const Resourses = () => {

  return (
    <Container>
        <div className='resourses_container'>
          <div className="resourses_second_container">
          <h1 className='resourses_heading'>Recourses for Game Development</h1>
          <p>  Link:  <a href="https://docs.unity.com/">learn unity</a></p>
          {`
          Game Development with Unity
           Steam
           GDevelop`
          }
          </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
p{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
}
a{
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  margin: 1rem;
  color: red;
}
.resourses_heading{
  font-size: 30px;
}
.resourses_container{
  display: flex;
  text-align: center;
  flex-direction: column;
}
font-size: 1.5rem;
padding: 1rem;
margin: 0px 10px;
width: 75vw;
color: white;
height: 65vh;
/* background: rgba( 144, 19, 254, 0.6 ); */
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 8.5px );
-webkit-backdrop-filter: blur( 8.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
display: flex;
align-items: center;
/* flex-direction: row; */
.resourses_second_container{
  display: flex;
  flex-direction: column;
}
`

export default Resourses
