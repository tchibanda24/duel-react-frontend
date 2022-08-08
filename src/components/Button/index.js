import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  text-align: center;
  min-width: 50px;
  max-width: 100%;
  padding: ${({ size }) => (size === 'small' ? '' : '14px 28px')};
  width: ${({ size }) => (size === 'small' ? '120px' : undefined)};
  color: #111111;
  background: transparent;
  border: 2px solid #111111;
  border-radius: 4px;
  transition-duration: 0.2s;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    background: ${({ background }) => background};
    color: #fff;
  }
`

Button.defaultProps = {
  to: '#'
}

Button.propTypes = {
  /** The size of the button */
  size: PropTypes.oneOf(['small']),
  /** The background of the button when it's hovered over */
  background: PropTypes.string,
  /** When using the button as a link, routes the user to the provided location */
  to: PropTypes.string
}

export default Button
