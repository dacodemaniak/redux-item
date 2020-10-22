import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Voir :
    {" "}
    <FilterLink filter="SHOW_ALL">
      Tous
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Restant
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Vus
    </FilterLink>
  </p>
)

export default Footer