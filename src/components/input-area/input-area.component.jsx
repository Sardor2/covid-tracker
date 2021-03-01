import React from 'react';
import './input-area.styles.css';


const InputArea = ({handleSubmit,countryName,handleChange}) => (
  <div className='input-area'>
    <form onSubmit={handleSubmit}>
      <input  className="search-box" name="countryName" type="text" value={countryName} onChange={handleChange} placeholder="Country Name"  required/>
      <button className="search-btn" type="submit">Search</button>
    </form>          
  </div>
);

export default InputArea;