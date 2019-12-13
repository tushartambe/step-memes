import React from 'react';
import './App.css';
import Gallery from './Components/Gallery';
import styled from 'styled-components';

function importAll(r) {
  return r.keys().map(r);
}

function format(images) {
  return images.map((imageUrl => {
    return { user: "©Tushar", tags: "#fun", imageUrl: imageUrl }
  }))
}

const allImages = format(importAll(require.context('./assets/', false, /\.(png|jpe?g|svg)$/)));

const Header = styled.div`
  width: 960px;
  font-size:40px;
  text-align:center;
  margin:10px auto;
  font-family: 'Permanent Marker', cursive;
  border-bottom:2px solid black;
`;

const Footer = styled.div`
  width: 960px;
  font-size:17px;
  margin:10px auto;
  text-align:right;
  // font-family: 'Permanent Marker', cursive;
  // border-bottom:2px solid black;
`;

function App() {
  return (
    <>
      <Header>STEP-6 MEMES</Header>
      <Gallery images={allImages} ></ Gallery>
      <Footer>By Tushar</Footer>
    </>
  );
}

export default App;