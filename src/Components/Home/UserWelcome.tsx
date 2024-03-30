import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import { Children, useEffect, useState } from 'react';
import styled from 'styled-components'
import React from 'react'
import TypeIt from 'typeit-react';


const UserWelcome = () => {
  return (
    <Container>
    <p className='heading_style'>WEB DEVELOPMENT: - </p>
    <TypeIt
    options={{
        strings: [`</br>
        1) Web development is the art and science of creating and maintaining websites. It's like building the intricate structures and functionalities that make up the online world we interact with daily. This vast field encompasses a variety of tasks, but let's explore some key aspects:
        </br></br>
        2) Front-end Development: This is the user-facing side, the visual layer you see and interact with. Front-end developers are the architects of a website's layout, design, and user experience (UX). They wield powerful tools like HTML, CSS, and JavaScript to craft compelling interfaces and bring websites to life.
        </br></br>
        3) Back-end Development: This is the hidden engine that powers a website. Back-end developers work behind the scenes, writing server-side code that handles data processing, database interactions, and website logic. Languages like PHP, Python, and Java are their weapons of choice to ensure smooth website operations.
        </br></br>
        4) Full-stack Development:  These versatile developers are the ultimate jacks-of-all-trades. They possess expertise in both front-end and back-end development, allowing them to tackle all aspects of website creation. Full-stack developers are highly sought-after for their well-rounded skillsets.
        </br></br>
        5) Ever-evolving Landscape: Web development is a dynamic field that constantly pushes boundaries. Here are some exciting trends shaping the future:
        </br></br>
        6) Progressive Web Apps (PWAs): These innovative apps bridge the gap between websites and native apps. They offer an app-like experience, can be installed on devices, and work offline – all accessible through a web browser.
        </br></br>
        7) Single-Page Applications (SPAs):  SPAs provide a seamless user experience. Instead of loading a new page for each click, they load all content initially and update the view dynamically, creating a fast and fluid feel.
        </br></br>
        8) Artificial Intelligence (AI): AI is making its mark on web development. Chatbots powered by AI can answer user queries, image recognition helps with content management, and natural language processing allows for more intuitive website interactions.
        </br></br>
        9) Web development offers a rewarding career path for those who enjoy creativity, problem-solving, and staying ahead of the curve. If you're fascinated by the world wide web, dive into this dynamic field and unleash your potential to build the websites of tomorrow!`],
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
font-size: 1rem;
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

export default UserWelcome
