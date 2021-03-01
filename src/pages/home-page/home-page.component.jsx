import React from 'react';
import './home-page.styles.css';
import DataArea from '../../components/data-area/data-area.component';
import DropDown from '../../components/drop-down/dropdown.component';
import { countryList } from './data';
import Chart from '../../components/chart/chart';
import {AppContext} from '../../context'

class HomePage extends React.Component {
  static contextType = AppContext;

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
    const {setLoadingFalse} = this.context;
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
      setLoadingFalse()
    } catch (err) {
      alert('Please Enter Valid Country!')
      console.log("sucker:"+err);
    }
  }
  
  handleChange = target => {
    const {setLoadingTrue} = this.context;
    setLoadingTrue();
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
    const {cases,deaths,recovered} = this.state;
    return (
      <div className="homepage">
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