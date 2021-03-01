import React from 'react';
import './home-page.styles.css';
import DataArea from '../../components/data-area/data-area.component';
import DropDown from '../../components/drop-down/dropdown.component';
import { countryList } from './data';
import Chart from '../../components/chart/chart';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      cases: 0,
      deaths: 0,
      recovered:0,
      countryName:'',
      countryTitle:'Global'
    }

  }

  getData = async countryName => {
    let covidUrl = `https://covid19.mathdro.id/api/countries/${countryName}`;
    if (countryName === 'global') {
      covidUrl = `https://covid19.mathdro.id/api/`;
    }

    try {
      let response = await  fetch(covidUrl);
      let data = await response.json();
      
      const {confirmed,deaths,recovered} = data;
      this.setState({
        cases:confirmed.value,
        deaths:deaths.value,
        recovered:recovered.value
      });
    } catch (err) {
      alert('Please Enter Valid Country!')
      console.log("sucker:"+err);
    }
  }

  handleChange = target => {
    this.getData(target.value);
    this.setState({
      countryTitle: target.label,
      countryName:''
    });
  }

  componentDidMount() {
    const covidUrl = 'https://covid19.mathdro.id/api/';
    this.getData('global');
  }

  render() {
    const {cases,deaths,recovered,countryTitle} = this.state;
    return (
      <div className="homepage">
        <h1 className='homepage-title'>Track Covid-19</h1>
    
        <DropDown setChange={this.handleChange} countryList={countryList} />

        <DataArea 
          {...this.state}
        />
        <Chart figures={[cases,deaths,recovered]} />
      </div>
    );
  }
}
  
  
export default HomePage;