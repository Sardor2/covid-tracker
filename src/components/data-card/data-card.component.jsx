import React,{useState} from "react";
import "./data-card.styles.css";
import CountUp from 'react-countup';

const DataCard = ({figures,title,color,dataIcon}) => {
  const date = new Date();  

  return (
    <div className="data-card" style={{borderColor: color}} >
      <h3 className="card-title">{title}</h3>
      <p className="date">{date.toDateString()}</p>
      <p className="numbers">
        <CountUp end={figures} duration={2}/>
      </p>
      <img className="data-icon" src={dataIcon} />
    </div>)
 
}

export default DataCard; 