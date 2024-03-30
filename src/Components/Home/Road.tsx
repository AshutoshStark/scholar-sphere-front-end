import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { Children, useEffect, useState } from 'react';
import styled from 'styled-components'
import React from 'react'
import TypeIt from 'typeit-react';

const Road = () => {
  return (
    <Container>
        <p className='heading_style'>ROAD MAP : - Pre-Production </p>
        <TypeIt
        options={{
            strings: [`Concept Development:<br/> Define the game's core idea, genre, setting, and characters.</br>
            <br/>Design Document:<br/> Create a detailed plan outlining the game's mechanics, story, and level design.</br>
            <br/>Prototyping:<br/> Build a playable prototype to test and refine the game's concepts.</br>
            
            <br/>Production<br/>
            <br>Art Creation:<br/>Design and create the game's visual assets, including characters, environments, and objects.</br>
            <br/>Programming:<br/> Implement the game's mechanics, physics, and AI.</br>
             <br/>Level Design:<br/>Create and populate the game's levels with challenges, obstacles, and rewards.</br>
             <br/>Audio Creation:<br/> Compose and record the game's music, sound effects, and voice acting.</br>
             <br/>Testing and Iteration:<br/> Conduct rigorous testing to identify and fix bugs, and gather feedback to improve the game.</br>
            
            <br/>Post-Production<br/>
            
             <br/>Release:<br/> Publish the game on target platforms (e.g., consoles, PCs, mobile).</br>
             <br/>Marketing and Promotion:<br/> Promote the game to potential players through various channels.</br>
             <br/>Updates and Maintenance:<br/> Release updates to fix bugs, add new content, and improve the game's performance.</br>
            <br/>Community Support:<br/> Engage with players, provide support, and gather feedback to inform future development.</br>
            
            
            <br/>Additional Considerations<br/>
            
             <br/>Team Building:<br/> Assemble a team with the necessary skills and experience.</br>
            <br/>Project Management:<br/> Track progress, manage resources, and ensure deadlines are met.</br>
             <br/>Budgeting and Funding:<br/> Determine the cost of development and secure funding sources.</br>
            <br/>Legal and Ethical Considerations:<br/> Comply with copyright laws, ensure player privacy, and avoid harmful content.</br>
            <br/>Iteration and Feedback:<br/> Continuously seek feedback from players and make adjustments to improve the game's quality.`],
            speed: 1,
            waitUntilVisible: true,
        }}
        />
  
    </Container>
  )
}

const Container = styled.div`
p{
    height: 80%;
    color: white;
}
font-size: .9rem;
padding: 1rem;
width: 70vw;
color: white;
height: 65vh;
margin: 5px;
/* background: rgba( 144, 19, 254, 0.6 ); */
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 8.5px );
-webkit-backdrop-filter: blur( 10px );
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
display: flex;
flex-direction: column;
align-items: center;
overflow-y: scroll;
.heading_style{
  text-align: center;
  justify-content: center;
  font-size: 20px;
  margin: 10px 0;
  color: #ffffff;
}
`

export default Road
