import React from 'react'
import ItemView from './ItemView'

const CategoryFilter = ({ category }) => {

  return (
    <div>
      <ItemView filter={category} />
    </div>
  )
}

export { CategoryFilter }
