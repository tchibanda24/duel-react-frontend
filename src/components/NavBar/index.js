import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import NavItem from './NavItem'

const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 24px 4px;
`

const NavBar = ({ logo, items }) => (
  <Wrapper>
    <NavItem exact to={logo.link}>
      {'<' + logo.text + '>'}
    </NavItem>
    <div>
      {items.map(item => (
        <NavItem key={item.text} to={item.link}>
          {item.text}
        </NavItem>
      ))}
    </div>
  </Wrapper>
)

NavBar.propTypes = {
  logo: PropTypes.shape({
    link: PropTypes.string,
    text: PropTypes.string.isRequired
  }),
  items: PropTypes.array
}

export default NavBar
