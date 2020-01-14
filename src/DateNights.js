import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {getPercentageDone} from "GetPercentageDone.js";

export default class DateNights extends React.Component{
  render(){
    let dateNights = 0;

    while(today <= finishDate) {
      if (today.getDay() === 6) {
      dateNights++;
    }

    let newDate = today.setDate(today.getDate() + 1);
        today = new Date(newDate);
    }
  return dateNights;
  }
}

