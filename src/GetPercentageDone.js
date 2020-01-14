import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";


class getPercentageDone extends React.Component {
  render(){
  const startDate = +new Date("January 4 2020");
  const finishDate = +new Date("March 23 2020");
  const todayDate = +new Date();
  const percentageDone = Math.floor(100 * (todayDate - startDate) / (finishDate - startDate)) ;
  return percentageDone
    }
  // let todayDay = +new Date().getDay;

  // let dateNights = 0;
  //   while (todayDate < startDate && todayDate > finishDate) {
  //     if (todayDay === 6) dateNights++;
  //   }
}

export {getPercentageDone};

