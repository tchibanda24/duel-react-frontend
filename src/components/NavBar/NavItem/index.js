import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavItem = styled(NavLink)`
  margin: 0 12px;
  text-decoration: none;
  color: black;
  font-family: 'Fira Code', serif;
  &.active {
    font-weight: bold;
  }
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export default NavItem
