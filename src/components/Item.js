import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ onClick, viewed, title }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: viewed ? 'line-through' : 'none'
    }}
  >
    {title}
  </li>
)

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  viewed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default Item