import React,{useState} from 'react';
import './chart.css';
import {Bar,Line,Pie} from "react-chartjs-2";

function Chart(props) {
  const chartData = {
    labels:['Infected','Deaths','Recovered'],
    datasets:[
      {
        label:'Covid19',
        data:props.figures,
        backgroundColor:[
          'rgba(249, 10, 6 ,0.7)',
          'rgba(229, 162, 16 ,0.7)',
          'rgba(115, 240, 16,0.7)'
        ]
      }
    ]
  };

  return (
    <div className="chart">
      <Bar
        data={chartData}
        width={100}
        height={50}
      />
      <Pie
        data={chartData}
        width={100}
        height={50}
      />
    </div>
  );
}

export default Chart;