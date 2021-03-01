import React from 'react';
import './data-area.styles.css';
import DataCard from "../data-card/data-card.component";
import DeadLogo from "../../assets/skull.svg";
import InfectedLogo from "../../assets/sick.svg";
import RecoveredLogo from "../../assets/patient.svg";

const DataArea = ({cases,deaths,recovered,countryTitle}) => (
  <div className="info-area">
    <h2 className="country-title">{countryTitle}</h2>
    <div className="cards">
      <DataCard title="Infected" figures={cases} color="red" dataIcon={InfectedLogo} />
      <DataCard title="Deaths" figures={deaths} color="#ff9900" dataIcon={DeadLogo} />
      <DataCard title="Recovered" figures={recovered} color="green" dataIcon={RecoveredLogo} />
    </div>
  </div>
);

export default DataArea;