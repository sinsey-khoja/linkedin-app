import React from "react";
import { SearchIcon } from '../../../../assets/svg'

import './Search.scss'

function Search(){
  return(
    
    <div className="search">
      <SearchIcon/>
      <input placeholder="Search" type="search" />
      
      <div className="chiziq"></div>
    </div>
  )
}
export default Search