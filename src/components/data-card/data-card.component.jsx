import React,{useState} from "react";
import "./data-card.styles.css";
import CountUp from 'react-countup';
import Spinner from '../spinner/spinner';
import {useGlobalContext} from '../../context'

const DataCard = ({figures,title,color,dataIcon}) => {
  const {isLoading} = useGlobalContext();
  const date = new Date();  

  return (
    <div className="data-card" style={{borderColor: color}} >
      <h3 className="card-title">{title}</h3>
      <p className="date">{date.toDateString()}</p>
      {
        isLoading ? <Spinner /> : (
          <p className="numbers">
            <CountUp end={figures} duration={2}/>
          </p>
        )
      }
      
      <img className="data-icon" src={dataIcon} />
    </div>)
 
}

export default DataCard; 