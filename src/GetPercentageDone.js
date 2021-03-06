import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";


export default class GetPercentageDone extends React.Component {
  render(){
    const startDate = +new Date("January 4 2020");
    const finishDate = +new Date("March 23 2020");
    const today = +new Date();
    const percentageDone = Math.floor(100 * (today - startDate) / (finishDate - startDate)) ;
    return percentageDone;
  }
}


