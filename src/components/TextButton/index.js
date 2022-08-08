import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Button from '../Button'

const StyledTextButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  margin: 12px 0;
  width: 50%;
  @media (min-width: 650px) {
    width: 30%;
  }
`

const TextButton = props => (
  <StyledTextButton>
    <span>{props.text}</span>
    <Button background={props.background} to={props.to}>
      {props.buttonText}
    </Button>
  </StyledTextButton>
)

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
}

export default TextButton
