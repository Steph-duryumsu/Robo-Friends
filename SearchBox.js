import { React } from 'react';

const SearchBox = ({searchChange}) => (
  <div className="pa2" >
  <input 
  type="Search"
  placeholder="Search Robot"
  className = ""
  onChange={searchChange}/>
  </div>
);
export default SearchBox;