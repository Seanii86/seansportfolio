import angular from './assets/angular.gif'
import doc from './assets/doc.gif'
import dude from './assets/dude.gif'
import energyhands from './assets/energyhands.gif'
import geo from './assets/geo.gif'
import mustang from './assets/mustang.gif'
import pinkspace from './assets/pinkspace.gif'
import React from 'react';

export default function Agif() {
  const gifList = [
    angular,
    doc,
    dude,
    energyhands,
    geo,
    mustang,
    pinkspace
  ];
  const randomIndex = Math.floor(Math.random() * gifList.length);
  const randomGif = gifList[randomIndex];
  return (
    <img src={randomGif} alt="random-gif" />
  );
}
