import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'

const Card = ({ title, children }) => (
  <Wrapper>
    <span>{title}</span>
    <hr/>
    {children}
  </Wrapper>
)

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
}

export default Card
