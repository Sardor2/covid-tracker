import React from "react";
import "./dropdown.styles.css";
import Select from 'react-select';


const DropDown = ({countryList,setChange}) => {
  let options = countryList.map(country => {
    return {
      label:country.name,
      value:country.name.toLowerCase()
    }
  });

  return  (
    <div className='select-container'>
      <Select defaultValue={options[0]} onChange={setChange} options={options} />
    </div>
  )
}
export default DropDown;