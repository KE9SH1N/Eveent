import React from 'react'
import './Category.scss'

import { Link } from 'react-router-dom'
import CategoryItem from './CategoryItem'

const Category = () => {
  return (
    <div className='categoryContainer'>
      <div className="categoryContents">
        <h3>Explore by your function type</h3>
        <CategoryItem/>
      </div>
    </div>
  )
}

export default Category