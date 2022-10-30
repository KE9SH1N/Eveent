import React from 'react'
import './SearchBy.scss'

import ModifySearch from './ModifySearch'
import Filter from './Filter'
import SearchItem from './SearchItem'

const Search = () => {
  return (
    <div className="searchbyPrime">
      <div className="searchbyContainer">
        <div className="searchtopContent">
          <ModifySearch />
        </div>
        <div className="searchbottomContent">
          <Filter />
          <SearchItem />
        </div>
      </div>
    </div>
    
  )
}

export default Search